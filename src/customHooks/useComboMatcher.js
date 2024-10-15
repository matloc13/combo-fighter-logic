import { useState, useEffect, useContext } from 'react';
import store from './../context/store';
import { useFighters } from './index';
import {
    gracelee,
    reneeijzer,
    franciscoferro,
    gakerebaako,
    borisWolfram,
    kagamiyoshida,
} from './../fighters/index';

const useComboMatcher = (table) => {
    const [damage, setDamage] = useState(0);
    const [matching, setMatchting] = useState([]);
    const [matchAmount, setMatchAmount] = useState({
        symbol1: false,
        symbol2: false,
        symbol3: false,
        symbol4: false,
        bonus: false,
    });
    const [tracking, setTracking] = useState({});
    const { pone, ptwo, gameConfig, dispatch } = useContext(store);
    const { flipToken } = useFighters();

    useEffect(() => {
        if (gameConfig.combo.current === true) {
            const winner = findWinnerName();
            const win = findWinner();
            const wCombos = winner !== '' && winnerCombos(winner);
            const winTable = gameConfig.winnerDetermined.winner.includes('1') ? table.p1 : table.p2;
            if (winTable.length && winner === 'Gakere Baako') {
                if (win.token === 'b') {
                    compareCombos(winTable, wCombos);
                }
            }
            if (winTable.length && winner !== 'Gakere Baako') {
                compareCombos(winTable, wCombos);
            }
        }
        return () => {
            if (gameConfig.damageDetermined.current) {
                setMatchAmount({
                    ...matchAmount,
                    symbol1: false,
                    symbol2: false,
                    symbol3: false,
                    symbol4: false,
                    bonus: false,
                });
            }
        };
    }, [table]); //eslint-disable-line

    useEffect(() => {
        comboMatched(matchAmount);
        return () => {};
    }, [matchAmount]); //eslint-disable-line

    useEffect(() => {
        damage > 1 && dispatch({ type: 'COMBO_DAMAGE', payload: damage });
        return () => {};
    }, [damage]); //eslint-disable-line

    const findWinnerName = () => {
        return gameConfig.winnerDetermined.winner.includes('1') ? pone.name : ptwo.name;
    };
    const findWinner = () => {
        return gameConfig.winnerDetermined.winner.includes('1') ? pone : ptwo;
    };

    const winnerCombos = (name) => {
        switch (name) {
            case 'Grace Lee':
                return gracelee.signatureCombos;
            case 'Renée Ijzer':
                return reneeijzer.signatureCombos;
            case 'Francisco Ferro':
                return franciscoferro.signatureCombos;
            case 'Gakere Baako':
                return gakerebaako.signatureCombos;
            case 'Boris Wolfram':
                return borisWolfram.signatureCombos;
            case 'Kagami Yoshida':
                return kagamiyoshida.signatureCombos;
            default:
                return;
        }
    };
    // ***********
    // Player Specific

    const reneeComboCheck = () => {
        const winner = findWinnerName();
        if (winner === 'Renée Ijzer') {
            const p = gameConfig.winnerDetermined.winner.includes('1') ? 'one' : 'two';
            flipToken(p);
        }
    };

    const checkRemaining = (table) => {
        Object.entries(tracking).forEach((k, i) => {
            const shape = `shape${i + 1}`;
            const symbol = `symbol${i + 1}`;
            const tab = table.length - 1;
            if (k[0] === shape) {
                if (
                    k[0] === shape &&
                    k[1].color === table[tab].color &&
                    k[1].shape === table[tab].btnIcon
                ) {
                    setMatchAmount({ ...matchAmount, [symbol]: true });
                }
                // if (k[0] === shape && k[1].color !== table[tab].color && k[1].shape !== table[tab].btnIcon) {
                //     setMatchting([]);
                //     setTracking({})
                //     setMatchAmount({...matchAmount, symbol1: false, symbol2: false, symbol3: false, symbol4: false, bonus: false});
                //     }
            } else if (k[0] === 'bonus') {
                if (
                    k[0] === 'bonus' &&
                    k[1].color === table[tab].color &&
                    k[1].shape === table[tab].btnIcon
                ) {
                    setMatchAmount({ ...matchAmount, bonus: true });
                }
            }
        });
    };

    const checkInitialMatch = (table, combo) => {
        Object.entries(combo).forEach((k, i) => {
            for (let i = 0; i < table.length; i++) {
                if (i === 0) {
                    if (
                        k[1][`shape${i + 1}`].color === table[0].color &&
                        k[1][`shape${i + 1}`].shape === table[0].btnIcon
                    ) {
                        setMatchting([...matching, k]);
                        setTracking({ ...k[1] });
                        setMatchAmount({ ...matchAmount, symbol1: true });
                    }
                }
            }
        });
    };

    const bonusPresent = () => {
        const bonus = Object.keys(tracking).filter((keys) => {
            return keys === 'bonus';
        });
        // console.log('bonus', bonus);
        return bonus.length === 1 ? true : false;
    };

    const highest = () => {
        let high = 0;
        let highkey = '';
        Object.keys(tracking).forEach((key) => {
            if (key !== 'damage' || key !== 'bonus' || key !== 'bonusDamage') {
                const newKey = key.replace(/\D/g, '');
                if (newKey > high) {
                    high = newKey;
                    highkey = key;
                } else {
                    console.log('nup');
                }
            }
        });
        return [highkey, high];
    };

    const comboMatched = (mA) => {
        const bonus = bonusPresent();
        const allTrue = highest();
        if (mA[`symbol${allTrue[1]}`] === true) {
            checkDamage(bonus, mA);
        }
    };

    const checkDamage = (bonus, mA) => {
        if (bonus && mA.bonus) {
            reneeComboCheck();
            const damage = tracking.damage + tracking.bonusDamage;
            setDamage(damage);
        } else {
            reneeComboCheck();
            setDamage(tracking.damage);
        }
    };

    const compareCombos = (table, combo) => {
        if (table.length === 1) {
            checkInitialMatch(table, combo);
        }
        if (table.length > 1) {
            checkRemaining(table);
        }
    };

    return { matching, matchAmount, findWinnerName, findWinner };
};

export default useComboMatcher;
