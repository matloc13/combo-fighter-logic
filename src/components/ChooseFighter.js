import React from 'react';
import { useFighters, useSendWebMessage } from './../customHooks/index';
import {
    reneeijzer,
    gracelee,
    borisWolfram,
    gakerebaako,
    kagamiyoshida,
    franciscoferro,
} from './../fighters/index';
const ChooseFighter = ({ fInPlay, go, client }) => {
    const { selectFighter } = useFighters();
    const { sendNote } = useSendWebMessage();
    const fighters = [
        reneeijzer,
        gracelee,
        borisWolfram,
        kagamiyoshida,
        franciscoferro,
        gakerebaako,
    ];

    const mayDisable = (f) => {
        if (fInPlay.p1.name === f.name) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <section className="choose-fighter">
            <ul className="fighter-list">
                {fighters.map((fighter, i) => (
                    <li key={i} className="list-item">
                        {mayDisable(fighter) ? (
                            <button
                                disabled
                                className={`button-fighter ${
                                    fInPlay.p1.name === fighter.name ? 'strike' : ''
                                }`}
                            >
                                {fighter.name}
                            </button>
                        ) : (
                            <button
                                className={'button-fighter pick-me'}
                                onClick={() => sendNote(fighter)}
                            >
                                {fighter.name}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <div className="players">
                {fInPlay.p1.name !== '' ? (
                    <aside className="player1">
                        <h5>Player One</h5>
                        <h1>{fInPlay.p1.name}</h1>
                        <h3>{fInPlay.p1.fightingStyle}</h3>
                    </aside>
                ) : (
                    ''
                )}
                {fInPlay.p2.name !== '' ? (
                    <aside className="player2">
                        <h5>Player Two</h5>
                        <h1>{fInPlay.p2.name}</h1>
                        <h3>{fInPlay.p2.fightingStyle}</h3>
                    </aside>
                ) : (
                    ''
                )}
            </div>
            <div className="confirm GO">
                {fInPlay.p1.name !== '' && fInPlay.p2.name !== '' && (
                    <button onClick={go}>{'GO'}</button>
                )}
            </div>
        </section>
    );
};

export default ChooseFighter;
