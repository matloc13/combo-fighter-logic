import React, { useContext } from 'react';
import { Confirm, Deck, Hand, Button, Boris } from './index';
import Store from './../context/store';
import { useDeck, useFighters } from './../customHooks/index';

const Player = ({ player }) => {
    const { table, gameConfig, curRound } = useContext(Store);
    const { drawCard } = useDeck();
    const { flipToken } = useFighters();
    const p = player.player === 'one' ? 'p1' : 'p2';

    return (
        <section className={`player-${player.player}`}>
            <h2 className={`title-${player.player}`}>{player.name}</h2>
            {curRound > 1 &&
                gameConfig.drawUp.current === true &&
                player.name === 'Boris Wolfram' && <Boris player={player} />}
            <Hand player={player} round={curRound} />
            {gameConfig.drawUp.current === true && player.hand.length === 5 && (
                <Confirm player={player} />
            )}
            {gameConfig.playCard.current === true && table[p].length === 1 && (
                <Confirm player={player} />
            )}
            {player.hand && player.hand.length < 5 && (
                <Button player={player} func={drawCard} name="draw" />
            )}
            <Deck player={player} flip={flipToken} />
        </section>
    );
};
export default Player;
