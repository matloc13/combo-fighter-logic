import React, { useContext } from 'react';
import Store from './../context/store';
import { Button } from './index';
import { useLogic, useDeck } from './../customHooks/index';

const CardController = ({ id, player, index, eligible }) => {
    const { gameConfig, table } = useContext(Store);
    const { playCard } = useLogic();
    const { discard } = useDeck();
    const tableNum = player.player === 'one' ? 'p1' : 'p2';
    return (
        <>
            <section className="card-controller">
                {gameConfig.drawUp.current && (
                    <>
                        <Button
                            id={index}
                            player={player}
                            index={index}
                            func={discard}
                            name="discard"
                        />
                    </>
                )}
                {gameConfig.playCard.current && table[tableNum].length < 1 && (
                    <>
                        <Button
                            id={id}
                            player={player}
                            index={index}
                            func={playCard}
                            name={'play'}
                        />
                    </>
                )}
                {gameConfig.combo.current && eligible === 'eligible' && (
                    <>
                        <Button
                            id={id}
                            player={player}
                            index={index}
                            func={playCard}
                            name={'play'}
                        />
                    </>
                )}
            </section>
        </>
    );
};

export default CardController;
