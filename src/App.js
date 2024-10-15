import React, { useEffect, useContext, useState } from 'react';
import { useFighters } from './customHooks';
import Store from './context/store';
import { Table, Player, Combo, ChooseFighter, JoinGame, User } from './components/index';
import './scss/App.scss';

function App() {
    // creat custom hook for  handling each characters special abilities and mega combos
    // will need to hook into calculatedamage with characters combo and special damage
    const { fighters } = useFighters();
    const {
        pone,
        ptwo,
        table,
        gameConfig,
        curRound,
        fInPlay,
        dispatch,
        kagamiStatus,
        client,
    } = useContext(Store);
    const [fightersReady, setFightersReady] = useState(false);

    const startGame = () => {
        if (fInPlay.p1.name !== '' && fInPlay.p2.name !== '') {
            dispatch({ type: 'FIGHTERS_START' });
        } else {
            alert('Pick a fighter!');
        }
    };

    useEffect(() => {
        console.log('kagamiStatus', kagamiStatus);
        return () => {};
    }, [kagamiStatus]);

    useEffect(() => {
        if (fInPlay.chosen === true) {
            fighters();
            setFightersReady(true);
        }
        return () => {};
    }, [fInPlay]); //eslint-disable-line

    useEffect(() => {
        // console.log('pone', pone)
        // console.log('ptwo', ptwo)
        return () => {};
    }, [pone, ptwo]);

    return (
        <>
            {fightersReady ? (
                <main className="App">
                    <User />
                    <h1>Combo Figter Round:{curRound}</h1>
                    {gameConfig.combo.current ? (
                        <>
                            <Table table={table} />
                            {gameConfig.winnerDetermined.winner.includes('1') && (
                                <Combo player={pone} />
                            )}
                            {gameConfig.winnerDetermined.winner.includes('2') && (
                                <Combo player={ptwo} />
                            )}
                        </>
                    ) : (
                        <>
                            <Table table={table} />

                            <Player player={pone} />

                            <Player player={ptwo} />
                        </>
                    )}
                </main>
            ) : (
                <main>
                    <JoinGame />
                </main>
            )}
        </>
    );
}

export default App;
