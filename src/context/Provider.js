import React, { useReducer, useEffect } from 'react';
import App from './../App';
import Store from './store';
import {
    poneReducer,
    ptwoReducer,
    tableReducer,
    roundReducer,
    roundCountReducer,
    gameConfigReducer,
    confirmationReducer,
    curRoundReducer,
    comboDamageReducer,
    chooseFighterReducer,
    kagamiReducer,
} from './reducers';
import { w3cwebsocket } from 'websocket';

const client = new w3cwebsocket('ws://127.0.0.1:8000');

const tableInit = { p1: [], p2: [] };
const roundCountinit = [];
const roundInit = {
    round: 1,
    current: false,
    completed: false,
    winner: '',
    damage: 0,
};
let currentRound = 1;
let d = 0;

const confirmationInit = {
    playerone: false,
    playertwo: false,
};

const gameConfigInit = {
    drawUp: {
        current: true,
        finished: false,
    },
    playCard: {
        current: false,
        finished: false,
    },
    winnerDetermined: {
        current: false,
        winner: '',
        finished: false,
    },
    combo: {
        current: false,
        finsished: false,
    },
    damageDetermined: {
        current: false,
        damage: 0,
        finished: false,
    },
};
const winInit = { winOne: false, winTwo: false, winThree: false, winFour: false };
const player1 = { name: '', deck: [], hand: [], health: 50, discard: [], player: 'one' };
const player2 = { name: '', deck: [], hand: [], health: 50, discard: [], player: 'two' };
const fightersInit = { p1: player1, p2: player2, chosen: false };

const Provider = () => {
    const [pone, dispatchPone] = useReducer(poneReducer, player1);
    const [ptwo, dispatchPtwo] = useReducer(ptwoReducer, player2);
    const [table, dispatchTable] = useReducer(tableReducer, tableInit);
    const [round, dispatchRound] = useReducer(roundReducer, roundInit);
    const [roundCount, dispatchRoundCount] = useReducer(roundCountReducer, roundCountinit);
    const [gameConfig, dispatchGameConfig] = useReducer(gameConfigReducer, gameConfigInit);
    const [confirmation, dispatchConfirmationReducer] = useReducer(
        confirmationReducer,
        confirmationInit
    );
    const [curRound, dispatchCurRound] = useReducer(curRoundReducer, currentRound);
    const [comboDamage, dispatchCDamage] = useReducer(comboDamageReducer, d);
    const [fInPlay, dispatchChooseFighter] = useReducer(chooseFighterReducer, fightersInit);

    const [kagamiStatus, dispatchKagamiStatus] = useReducer(kagamiReducer, winInit);

    const dispatch = (action) => {
        [
            dispatchPone,
            dispatchPtwo,
            dispatchTable,
            dispatchRound,
            dispatchGameConfig,
            dispatchConfirmationReducer,
            dispatchRoundCount,
            dispatchCurRound,
            dispatchCDamage,
            dispatchChooseFighter,
            dispatchKagamiStatus,
        ].forEach((fn) => {
            fn(action);
        });
    };
    useEffect(() => {
        dispatch({ type: 'UPDATE_ROUND_COUNT', payload: [...roundCount, round] });
        if (curRound < round.round) {
            dispatch({ type: 'RAISE_NUM' });
            dispatch({ type: 'CLEAR_CONFIG' });
        }
        return () => {};
    }, [round]); //eslint-disable-line

    // execute
    /*
client.send(
    JSON.stringify({
        type: 'message',
        msg: value,
    })
);
*/
    useEffect(() => {
        console.log('client', client);
        client.onopen = () => {
            console.log('websocket client connected');
        };
        client.onmessage = (message) => {
            console.log(`message`, message);
            const dataFromServer = JSON.parse(message.data);
            console.log('reply', dataFromServer);
        };
        return () => {};
    }, []);

    return (
        <Store.Provider
            value={{
                confirmation,
                gameConfig,
                curRound,
                roundCount,
                pone,
                ptwo,
                table,
                comboDamage,
                fInPlay,
                dispatch,
                kagamiStatus,
                client,
            }}
        >
            <App />
        </Store.Provider>
    );
};

export default Provider;
