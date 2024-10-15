import { useContext, useEffect } from 'react';
import Store from './../context/store';
import { useLogic } from './index';

const useGame = (player) => {
    const { dispatch, confirmation, gameConfig } = useContext(Store);
    const { cardPlayed, calculateDamage } = useLogic();

    useEffect(() => {
        if (confirmation.playerone && confirmation.playertwo) {
            if (gameConfig.drawUp.current) {
                dispatch({ type: 'UPDATE_CONFIG_DRAWUP' });
                return dispatch({ type: 'CLEAR_CONFIRM' });
            }
            if (gameConfig.playCard.current) {
                return cardPlayed();
            }
            if (gameConfig.combo.current) {
                dispatch({ type: 'UPDATE_CONFIG_COMBO' });
                calculateDamage(player);
                return dispatch({ type: 'CLEAR_CONFIRM' });
            }
        }
        return () => {};
    }, [confirmation]); //eslint-disable-line

    useEffect(() => {
        if (gameConfig.damageDetermined.finished === true) {
            //   dispatch({type: 'CLEAR_CONFIG'})
            console.log('reset');
        }
        return () => {};
    }, [gameConfig.damageDetermined]); //eslint-disable-line

    const confirmDraw = () => {
        const response = window.confirm('Ready to Go?');
        if (response) {
            if (player.player === 'one') {
                dispatch({
                    type: 'UPDATE_CONFIRM',
                    payload: {
                        ...confirmation,
                        playerone: true,
                        playertwo: confirmation.playertwo,
                    },
                });
            }
            if (player.player === 'two') {
                dispatch({
                    type: 'UPDATE_CONFIRM',
                    payload: {
                        ...confirmation,
                        playerone: confirmation.playerone,
                        playertwo: true,
                    },
                });
            }
        } else {
            alert('broken whoops');
        }
    };

    const confirmPlay = () => {
        const response = window.confirm('This is the right Card?.');
        if (response) {
            if (player.player === 'one') {
                dispatch({
                    type: 'UPDATE_CONFIRM',
                    payload: {
                        ...confirmation,
                        playerone: true,
                        playertwo: confirmation.playertwo,
                    },
                });
            }
            if (player.player === 'two') {
                dispatch({
                    type: 'UPDATE_CONFIRM',
                    payload: {
                        ...confirmation,
                        playerone: confirmation.playerone,
                        playertwo: true,
                    },
                });
            }
        }
    };

    const confirmCombo = () => {
        const response = window.confirm('Finished Combo');
        if (response) {
            dispatch({
                type: 'UPDATE_CONFIRM',
                payload: { ...confirmation, playerone: true, playertwo: true },
            });
        }
    };

    return { confirmDraw, confirmCombo, confirmPlay };
};

export default useGame;
