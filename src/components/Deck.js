import React from 'react';
import { Kagami } from './../components/index';

const Deck = ({ player, flip }) => {
    return (
        <section className={`deck-${player.player}`}>
            <h5>{player.name}</h5>
            <h3>Health: {player.health}</h3>
            <aside className="token">
                <h5 className="letter">{player.token}</h5>
                <h4 className="title">{player.token && player[player.token].name}</h4>
                <p className="text">{player.token && player[player.token].text}</p>
                {player.name === 'Kagami Yoshida' && (
                    <button className="flip-me" onClick={() => flip(player.player)}>
                        Flip
                    </button>
                )}
                {player.name === 'Kagami Yoshida' && player.token === 'b' && <Kagami />}
            </aside>
        </section>
    );
};

export default Deck;
