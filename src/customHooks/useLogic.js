import { useContext, useState, useEffect } from 'react';
import Store from './../context/store';
import { useDeck, useFighters } from './index';

const useLogic = () => {
    const {
        pone,
        ptwo,
        roundCount,
        curRound,
        table,
        dispatch,
        gameConfig,
        comboDamage,
    } = useContext(Store);
    const { drawNDiscard, shuffle, clearTable } = useDeck();
    const {
        gracePhoenix,
        franciscoDamageCheck,
        franciscoDoubleDamage,
        borisPowered,
        gakereDamage,
        gakereWrestle,
        gakereLoser,
        kagamiWin,
        kagamiLoser,
    } = useFighters();
    const [winner, setwin] = useState('');

    useEffect(() => {
        if (winner !== '') {
            // console.log('winner', winner);
            switch (winner) {
                case 'player1':
                    if (pone.name === 'Kagami Yoshida') {
                        kagamiWin(table.p1.length);

                        dispatch({
                            type: 'UPDATE_DECKtwo',
                            payload: {
                                name: ptwo.name,
                                deck: ptwo.deck,
                                hand: ptwo.hand,
                                health: ptwo.deck.length,
                                discard: [...ptwo.discard, table.p2[0]],
                                player: ptwo.player,
                                token: ptwo.token,
                                a: ptwo.a,
                                b: ptwo.b,
                            },
                        });
                        return dispatch({ type: 'UPDATE_CONFIG_WINNER', winner: winner });
                    } else {
                        dispatch({
                            type: 'UPDATE_DECKtwo',
                            payload: {
                                name: ptwo.name,
                                deck: ptwo.deck,
                                hand: ptwo.hand,
                                health: ptwo.deck.length,
                                discard: [...ptwo.discard, table.p2[0]],
                                player: ptwo.player,
                                token: ptwo.token,
                                a: ptwo.a,
                                b: ptwo.b,
                            },
                        });
                        dispatch({ type: 'CLEAR_TABLE_two', payload: { p1: table.p1, p2: [] } });
                        return dispatch({ type: 'UPDATE_CONFIG_WINNER', winner: winner });
                    }
                case 'player2':
                    if (ptwo.name === 'Kagami Yoshida') {
                        kagamiWin(table.p2.length);

                        dispatch({
                            type: 'UPDATE_DECKone',
                            payload: {
                                name: pone.name,
                                deck: pone.deck,
                                hand: pone.hand,
                                health: pone.deck.length,
                                discard: [...pone.discard, table.p1[0]],
                                player: pone.player,
                                token: pone.token,
                                a: pone.a,
                                b: pone.b,
                            },
                        });
                        return dispatch({ type: 'UPDATE_CONFIG_WINNER', winner: winner });
                    } else {
                        dispatch({
                            type: 'UPDATE_DECKone',
                            payload: {
                                name: pone.name,
                                deck: pone.deck,
                                hand: pone.hand,
                                health: pone.deck.length,
                                discard: [...pone.discard, table.p1[0]],
                                player: pone.player,
                                token: pone.token,
                                a: pone.a,
                                b: pone.b,
                            },
                        });
                        dispatch({ type: 'CLEAR_TABLE_one', payload: { p1: [], p2: table.p2 } });
                        return dispatch({ type: 'UPDATE_CONFIG_WINNER', winner: winner });
                    }
                case 'stale':
                    dispatch({
                        type: 'UPDATE_DECKtwo',
                        payload: {
                            name: ptwo.name,
                            deck: ptwo.deck,
                            hand: ptwo.hand,
                            health: ptwo.deck.length,
                            discard: [...ptwo.discard, table.p2[0]],
                            player: ptwo.player,
                            token: ptwo.token,
                            a: ptwo.a,
                            b: ptwo.b,
                        },
                    });
                    dispatch({
                        type: 'UPDATE_DECKone',
                        payload: {
                            name: pone.name,
                            deck: pone.deck,
                            hand: pone.hand,
                            health: pone.deck.length,
                            discard: [...pone.discard, table.p1[0]],
                            player: pone.player,
                            token: pone.token,
                            a: pone.a,
                            b: pone.b,
                        },
                    });
                    dispatch({ type: 'CLEAR_TABLE' });
                    dispatch({ type: 'UPDATE_CONFIG_WINNER', winner: 'stalemate' });
                    return reconcile(0);
                default:
                    return;
            }
        } else {
            if (table.p1.length && table.p2.length) {
                determineWinner();
            }
        }
    }, [winner]); //eslint-disable-line

    const cardPlayed = () => {
        dispatch({ type: 'UPDATE_CONFIG_PLAYED' });
        dispatch({ type: 'CLEAR_CONFIRM' });

        if (table.p1.length && table.p2.length) {
            determineWinner();
        }
    };

    const calculateDamage = (fghtr) => {
        let damageTotal = comboDamage;
        const pT =
            table[
                gameConfig.winnerDetermined && gameConfig.winnerDetermined.winner.includes('1')
                    ? 'p1'
                    : 'p2'
            ];
        // console.log('pT', pT)
        // console.log('fghtr', fghtr)
        if (fghtr.name === 'Grace Lee' && fghtr.token === 'a') {
            pT.forEach((card, i) => {
                return i === 0
                    ? (damageTotal +=
                          card.color === 'red' ? card.openingDamage + 1 : card.openingDamage)
                    : (damageTotal +=
                          card.color === 'red' ? card.comboDamage + 1 : card.comboDamage);
            });
        } else if (fghtr.name === 'Gakere Baako' && fghtr.token === 'b') {
            pT.forEach((card, i) => {
                return i === 0
                    ? (damageTotal +=
                          card.color === 'red' ? card.openingDamage * 3 : card.openingDamage)
                    : (damageTotal +=
                          card.color === 'red' ? card.comboDamage * 3 : card.comboDamage);
            });
        } else if (fghtr.name === 'Kagami Yoshida') {
            const loser =
                gameConfig.winnerDetermined && gameConfig.winnerDetermined.winner.includes('1')
                    ? 'p2'
                    : 'p1';
            const higherVal = (lose) => {
                if (table[lose][0].openingDamage > table[lose][0].comboDamage) {
                    return table[lose][0].openingDamage;
                } else if (table[lose][0].openingDamage < table[lose][0].comboDamage) {
                    return table[lose][0].comboDamage;
                }
            };
            pT.forEach((card, i) => {
                return i === 0
                    ? (damageTotal +=
                          card.openingDamage === 'x' ? higherVal(loser) : card.openingDamage)
                    : (damageTotal +=
                          card.comboDamage === 'x' ? higherVal(loser) : card.comboDamage);
            });
        } else {
            pT.forEach((card, i) => {
                return i === 0
                    ? (damageTotal += card.openingDamage)
                    : (damageTotal += card.comboDamage);
            });
        }
        console.log('damageTotal', damageTotal);

        return reconcile(damageTotal);
    };

    const determineWinner = () => {
        const t1 = table.p1[0];
        const t2 = table.p2[0];
        const phoenix1 =
            t1.fighter === 'Grace Lee' && pone.token === 'a' && t1.color === 'red' ? true : false;
        const phoenix2 =
            t2.fighter === 'Grace Lee' && ptwo.token === 'a' && t2.color === 'red' ? true : false;
        const initiativeOne = phoenix1 ? t1.initiative + 3 : t1.initiative;
        const initiativeTwo = phoenix2 ? t2.initiative + 3 : t2.initiative;
        // console.log('t1', t1.color);
        // console.log('t2', t2.color);
        if (t1.color === 'red') {
            if (t2.color === 'red') {
                if (initiativeOne > initiativeTwo) {
                    return setwin('player1');
                } else if (initiativeOne < initiativeTwo) {
                    return setwin('player2');
                } else if (initiativeOne === initiativeTwo) {
                    return setwin('stale');
                }
            }
            if (t2.color === 'blue') {
                return setwin('player2');
            }
            if (t2.color === 'yellow') {
                return setwin('player1');
            }
        }
        if (t1.color === 'blue') {
            if (t2.color === 'red') {
                return setwin('player1');
            }
            if (t2.color === 'blue') {
                return setwin('stale');
            }
            if (t2.color === 'yellow') {
                return setwin('player2');
            }
        }
        if (t1.color === 'yellow') {
            if (t2.color === 'red') {
                return setwin('player2');
            }
            if (t2.color === 'blue') {
                return setwin('player1');
            }
            if (t2.color === 'yellow') {
                if (t1.special === true && t2.special === true) {
                    return setwin('stale');
                }
                if (t1.special === true) {
                    return setwin('player1');
                }
                if (t2.special === true) {
                    return setwin('player2');
                }
                return setwin('stale');
            }
        }
        return 'done';
    };

    const reconcile = (damage) => {
        applyDamage(damage, gameConfig.winnerDetermined.winner);
        franciscoDamageCheck(damage, gameConfig.winnerDetermined.winner);
        const c = roundCount;
        let curR = curRound;
        let cur = {};
        c.splice(c.length - 1, 1);
        cur = {
            round: curRound,
            winner: gameConfig.winnerDetermined.winner,
            current: false,
            completed: true,
            damage: damage,
        };
        c.push(cur);
        dispatch({ type: 'UPDATE_ROUND_COUNT', payload: c });
        dispatch({
            type: 'SET_ROUND',
            payload: { round: (curR += 1), current: true, completed: false, winner: '', damage: 0 },
        });
        dispatch({ type: 'UPDATE_CONFIG_DAMAGE_DONE', payload: damage });
    };

    const removeCards = (player, damage) => {
        let i = 0;
        const damage1 = player.name === 'Gakere Baako' ? gakereDamage(damage, player) : damage;
        kagamiLoser(player);
        const removed = [];
        if (damage1 > 0) {
            while (i < damage1) {
                const id = shuffle(player.deck);
                const disc = player.deck.splice(id, 1);
                removed.push(disc[0]);
                i += 1;
            }
        }
        dispatch({
            type: `UPDATE_DECK${player.player}`,
            payload: {
                name: player.name,
                deck: player.deck,
                hand: player.hand,
                health: player.deck.length,
                discard: drawNDiscard(removed, player),
                player: player.player,
                token: gakereLoser(player),
                a: player.a,
                b: player.b,
            },
        });
    };

    const applyDamage = (d, w) => {
        switch (w) {
            case 'player1':
                clearTable(table.p1, pone);
                if (pone.name === 'Francisco Ferro') {
                    const damage1 = franciscoDoubleDamage(d, pone);
                    return removeCards(ptwo, damage1);
                } else if (pone.name === 'Boris Wolfram') {
                    const damage1 = borisPowered(d, pone);
                    return removeCards(ptwo, damage1);
                } else {
                    return removeCards(ptwo, d);
                }
            case 'player2':
                clearTable(table.p2, ptwo);
                if (ptwo.name === 'Francisco Ferro') {
                    const damage1 = franciscoDoubleDamage(d, ptwo);
                    return removeCards(pone, damage1);
                } else if (ptwo.name === 'Boris Wolfram') {
                    const damage1 = borisPowered(d, ptwo);
                    return removeCards(pone, damage1);
                } else {
                    return removeCards(pone, d);
                }
            default:
                return;
        }
    };

    const legalPlay = (card) => {
        if (!gameConfig.combo.current) {
            return '';
        }

        if (gameConfig.combo.current) {
            const pT =
                table[
                    gameConfig.winnerDetermined && gameConfig.winnerDetermined.winner.includes('1')
                        ? 'p1'
                        : 'p2'
                ];
            const check =
                pT &&
                pT[pT.length - 1] &&
                pT[pT.length - 1].comboBox.filter((cc, i) => {
                    return cc.color === card.color && cc.shape === card.btnIcon;
                });
            if (check && check.length) {
                return 'eligible';
            } else {
                return 'noteligible';
            }
        }
    };

    const playCard = (id, player, i) => {
        let tab = {};
        const response = window.confirm('This is the right Card?.');
        if (response) {
            const tab1 = table.p1;
            const tab2 = table.p2;
            const play = player.hand.splice(i, 1);
            const newHand = player.hand.filter((ele) => {
                return ele.id !== id;
            });
            dispatch({
                type: `UPDATE_DECK${player.player}`,
                payload: {
                    name: player.name,
                    deck: player.deck,
                    hand: newHand,
                    health: player.deck.length,
                    discard: player.discard,
                    player: player.player,
                    token: player.token,
                    a: player.a,
                    b: player.b,
                },
            });

            switch (player.player) {
                case 'one':
                    gracePhoenix(play[0], player.player);
                    gakereWrestle(play[0], player.player);
                    tab1.push(play[0]);
                    tab = { p1: tab1, p2: tab2 };
                    return dispatch({ type: 'PLAY_TABLE', payload: tab });
                case 'two':
                    gracePhoenix(play[0], player.player);
                    gakereWrestle(play[0], player.player);
                    tab2.push(play[0]);
                    tab = { p1: tab1, p2: tab2 };
                    return dispatch({ type: 'PLAY_TABLE', payload: tab });
                default:
                    return;
            }
        }
    };

    return { calculateDamage, determineWinner, legalPlay, winner, cardPlayed, playCard };
};

export default useLogic;
