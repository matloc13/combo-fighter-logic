import React, { useContext } from 'react';
import Store from './../context/store';
import { useGame } from './../customHooks/index';

const Confirm = ({ player }) => {
    const { gameConfig, confirmation } = useContext(Store);
    const { confirmCombo, confirmDraw } = useGame(player);
    const p = `player${player.player}`;
    return (
        <>
            {gameConfig.drawUp && gameConfig.drawUp.current === true && confirmation[p] === false && (
                <button className={`confirm-button`} onClick={confirmDraw}>
                    <h3>confirm</h3>
                </button>
            )}

            {gameConfig.combo && gameConfig.combo.current === true && confirmation[p] === false && (
                <button className={`confirm-button`} onClick={confirmCombo}>
                    <h3>confirm</h3>
                </button>
            )}
        </>
    );
};

export default Confirm;
