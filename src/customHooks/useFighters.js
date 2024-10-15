import { useContext } from 'react';
import {
    reneeijzer,
    gracelee,
    franciscoferro,
    borisWolfram,
    kagamiyoshida,
    gakerebaako,
} from './../fighters/index';
import Store from './../context/store';
import { useDeck } from './index';

const useFighters = () => {
    const { pone, ptwo, dispatch, fInPlay, kagamiStatus, gameConfig } = useContext(Store);
    const { generateDeck, generateStartingHand, drawCard } = useDeck();

    const fighters = () => {
        const newdeck = generateDeck(fInPlay.p1.deck);
        const newhand = generateStartingHand(newdeck, pone.player);
        const newdeck1 = generateDeck(fInPlay.p2.deck);
        const newhand1 = generateStartingHand(newdeck1, ptwo.player);

        const player1 = {
            name: fInPlay.p1.name,
            deck: newdeck,
            hand: newhand,
            health: newdeck.length,
            player: 'one',
            discard: [],
            token: 'a',
            a: fInPlay.p1.a,
            b: fInPlay.p1.b,
        };

        const player2 = {
            name: fInPlay.p2.name,
            deck: newdeck1,
            hand: newhand1,
            health: newdeck1.length,
            player: 'two',
            discard: [],
            token: 'a',
            a: fInPlay.p2.a,
            b: fInPlay.p2.b,
        };
        dispatch({ type: 'SET_PONE', payload: player1 });
        dispatch({ type: 'SET_PTWO', payload: player2 });
    };

    const selectFighter = (fighter) => {
        const num = fInPlay.p1.name === '' ? 'ONE' : 'TWO';
        switch (fighter.name) {
            case 'Grace Lee':
                return dispatch({ type: `CHOOSE_FIGHTER_${num}`, payload: gracelee });
            case 'Renée Ijzer':
                return dispatch({ type: `CHOOSE_FIGHTER_${num}`, payload: reneeijzer });
            case 'Francisco Ferro':
                return dispatch({ type: `CHOOSE_FIGHTER_${num}`, payload: franciscoferro });
            case 'Gakere Baako':
                return dispatch({ type: `CHOOSE_FIGHTER_${num}`, payload: gakerebaako });
            case 'Boris Wolfram':
                return dispatch({ type: `CHOOSE_FIGHTER_${num}`, payload: borisWolfram });
            case 'Kagami Yoshida':
                return dispatch({ type: `CHOOSE_FIGHTER_${num}`, payload: kagamiyoshida });
            default:
                return;
        }
    };

    const flipToken = (player) => {
        // player = 'one' or 'two'
        return dispatch({ type: `FLIP_TOKEN${player}` });
    };

    const gracePhoenix = (card, player) => {
        card.name === 'phoenix strike' && flipToken(player);
    };

    const reneeHandCheck = (player) => {
        const reneeDrawHand = (response) => {
            if (response) {
                flipToken(player.player);
                for (let i = 0; i < 5; i++) {
                    drawCard(i, player.player);
                }
            }
        };
        if (player.name === 'Renée Ijzer' && player.token === 'b' && player.hand.length === 0) {
            const response = window.confirm('Draw up and flip your Token?');
            reneeDrawHand(response);
        }
    };

    const franciscoDamageCheck = (damage, winner) => {
        switch (winner) {
            case 'player1':
                if (ptwo.name === 'Francisco Ferro' && damage >= 1) {
                    return flipToken(ptwo.player);
                }
                break;
            case 'player2':
                if (pone.name === 'Francisco Ferro' && damage >= 1) {
                    return flipToken(pone.player);
                }
                break;
            default:
                return;
        }
    };

    const franciscoDoubleDamage = (damage, fghtr) => {
        if (fghtr.name === 'Francisco Ferro' && fghtr.token === 'b') {
            const response = window.confirm(' FLIP Retaliate?');
            if (response) {
                flipToken(fghtr.player);
                return damage * 2;
            } else {
                return damage;
            }
        } else {
            return damage;
        }
    };

    const borisDiscardThree = (player, fulfilled) => {
        console.log('fulfilled', player.name, fulfilled);
        if (player.name === 'Boris Wolfram') {
            if (fulfilled.status === true && player.token !== 'b') {
                flipToken(player.player);
            }
        }
    };

    const borisPowered = (damage, player) => {
        if (player.name === 'Boris Wolfram' && player.token === 'b') {
            const response = window.confirm('Play Powered By Radiation and flip token to A side');
            if (response) {
                flipToken(player.player);
                return (damage += 2);
            } else {
                return damage;
            }
        } else {
            return damage;
        }
    };

    const gakereDamage = (damage, player) => {
        if (player.name === 'Gakere Baako') {
            if (player.token === 'a') {
                return (damage += 2);
            }
            if (player.token === 'b') {
                return (damage = 0);
            }
        }
    };

    const gakereWrestle = (card, player) => {
        if (card.name === 'wrestle') {
            return flipToken(player);
        }
    };

    const gakereLoser = (loser) => {
        if (loser.name === 'Gakere Baako') {
            if (loser.token === 'b') {
                return 'a';
            } else {
                return loser.token;
            }
        } else {
            return loser.token;
        }
    };

    const kagamiWin = (tableLength) => {
        console.log('kagamiStatus', kagamiStatus);
        if (gameConfig.winnerDetermined.winner !== '' && gameConfig.combo.current === true) {
            if (tableLength === 1) {
                if (kagamiStatus.winFour) {
                    console.log('win');
                } else if (kagamiStatus.winThree) {
                    dispatch({ type: 'WIN_FOUR' });
                } else if (kagamiStatus.winTwo) {
                    dispatch({ type: 'WIN_THREE' });
                } else if (kagamiStatus.winOne) {
                    dispatch({ type: 'WIN_TWO' });
                } else {
                    dispatch({ type: 'WIN_ONE' });
                }
            }
        }
    };
    const kagamiLoser = (loser) => {
        if (loser.name === 'Kagami Yoshida') {
            return dispatch({ type: 'LOSE' });
        }
    };

    return {
        fighters,
        selectFighter,
        flipToken,
        gracePhoenix,
        reneeHandCheck,
        franciscoDamageCheck,
        franciscoDoubleDamage,
        borisDiscardThree,
        borisPowered,
        gakereDamage,
        gakereWrestle,
        gakereLoser,
        kagamiWin,
        kagamiLoser,
    };
};

export default useFighters;
