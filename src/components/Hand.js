import React from 'react';
import { Card } from './index';
import { useLogic, useFighters } from './../customHooks/index';
const Hand = ({ player, round }) => {
    const { legalPlay } = useLogic();
    const { reneeHandCheck } = useFighters();
    reneeHandCheck(player);

    return (
        <aside className="hand-container">
            {player &&
                player.hand &&
                player.hand.map((card, i) => (
                    <Card key={i} card={card} i={i} player={player} eligible={legalPlay(card)} />
                ))}
        </aside>
    );
};

export default Hand;
