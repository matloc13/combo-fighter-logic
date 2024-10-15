import React, { useState, useEffect, useRef } from 'react';
import { useFighters } from '../customHooks/index';

const Boris = ({ player, lasthand }) => {
    const { borisDiscardThree } = useFighters();
    const [discarded, setDiscarded] = useState([]);
    const [ability, setAbility] = useState({ status: 'working' });
    const [fulfilled, setFulfilled] = useState({ status: false });
    const handstartRef = useRef(null);
    const lasthandRef = useRef(null);

    useEffect(() => {
        handstartRef.current = player.hand.length;
        return () => {};
    }, []); //eslint-disable-line

    useEffect(() => {
        if (ability.status === 'working') {
            const diff = 50 - (player.health + handstartRef.current);
            const length = player.discard.length;
            didDrawCard(player.hand.length);
            if (length > diff && player.discard[length - 1].color === 'blue') {
                setDiscarded([...discarded, player.discard[length - 1]]);
            }
        }
        return () => {};
    }, [player]); //eslint-disable-line

    useEffect(() => {
        if (discarded.length === 3) {
            const blue = discarded.filter((card) => {
                return card.color === 'blue';
            });
            if (blue.length === 3) {
                setFulfilled({ ...fulfilled, status: true });
            } else {
                setFulfilled({ ...fulfilled, status: false });
            }
            console.log('%c blue', 'color: blue;', blue);
        }
        return () => {};
    }, [discarded]); //eslint-disable-line

    useEffect(() => {
        if (player.name === 'Boris Wolfram' && fulfilled.status === true) {
            borisDiscardThree(player, fulfilled);
        }
        if (fulfilled.status === true) {
            setAbility({ ...ability, status: 'flipped' });
        }
        return () => {};
    }, [fulfilled, player]); //eslint-disable-line

    const didDrawCard = (hand) => {
        if (hand > lasthandRef.current) {
            if (lasthandRef.current === null) {
                lasthandRef.current = hand;
                return false;
            } else {
                setAbility({ ...ability, status: 'cancelled' });
                return true;
            }
        } else {
            lasthandRef.current = hand;
            return false;
        }
    };

    return (
        <>
            {ability.status === 'working' && (
                <aside className="boris-discard">
                    {discarded.length &&
                        discarded.map((card, i) => (
                            <ul key={i + 'list'}>
                                <li key={i} className={`${card.color} ${card.btnIcon}`}></li>
                            </ul>
                        ))}
                </aside>
            )}
        </>
    );
};

export default Boris;
