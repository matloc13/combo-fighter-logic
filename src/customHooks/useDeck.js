import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Store from './../context/store';

const useDeck = () => {
    const { dispatch } = useContext(Store);

    const generateDeck = (deck) => {
        const fullDeck = [];
        const generateCopies = (card) => {
            const version = [];
            for (let i = 1; i <= card.copies; i++) {
                version.push({ ...card, id: uuidv4(), version: version.length });
            }
            if (version.length === card.copies) {
                version.forEach((card) => {
                    fullDeck.push(card);
                });
            }
        };
        deck.forEach((card, i) => {
            if (card.copies > 1) {
                generateCopies(card);
            } else if (card.copies === 1) {
                fullDeck.push({ ...card, id: uuidv4(), version: 0 });
            }
        });
        return fullDeck;
    };

    const generateStartingHand = (deck, player) => {
        const hand = deck.filter((card) => {
            return card.starting === true && card.version === 0;
        });
        updateDeck(hand, deck, player);
        return hand;
    };

    const updateDeck = (remove, deck, player) => {
        remove.forEach((ele) => {
            const id = deck.indexOf(ele.id);
            deck.splice(id, 1);
            dispatch({
                type: `UPDATE_DECK${player.player}`,
                payload: {
                    name: player.name,
                    deck: deck,
                    hand: player.hand,
                    health: deck.length,
                    discard: player.discard,
                    player: player.player,
                    token: player.token,
                    a: player.a,
                    b: player.b,
                },
            });
        });
    };

    const drawNDiscard = (remove, player) => {
        let discard = player.discard;
        remove.forEach((ele) => {
            discard.push(ele);
        });
        return discard;
    };

    const checkCardNotStarting = (card, player, i) => {
        // console.log(' %c card', 'color: blue', { s: card.starting, v: card.version });
        if (card.starting && card.version === 0) {
            drawCard(i, player);
        } else {
            return card;
        }
    };

    const drawCard = (i, player) => {
        if (player.hand.length < 5) {
            const id = shuffle(player.deck);
            const topCard = player.deck.splice(id, 1);
            const drawnCard = checkCardNotStarting(topCard[0], player, i);
            const goodCard =
                topCard[0].starting === true && topCard[0].version === 0 ? false : true;
            return (
                topCard.length &&
                goodCard &&
                dispatch({
                    type: `UPDATE_DECK${player.player}`,
                    payload: {
                        name: player.name,
                        deck: player.deck,
                        hand: [...player.hand, drawnCard],
                        health: player.deck.length,
                        discard: player.discard,
                        player: player.player,
                        token: player.token,
                        a: player.a,
                        b: player.b,
                    },
                })
            );
        } else if (player.hand.length >= 5) {
            return alert('discard first');
        }
    };

    const discard = (i, player) => {
        const discarded = player.hand.splice(i, 1);
        // console.log('discard', discarded[0]);
        return (
            discarded.length &&
            dispatch({
                type: `UPDATE_DECK${player.player}`,
                payload: {
                    name: player.name,
                    deck: player.deck,
                    hand: player.hand,
                    health: player.deck.length,
                    discard: [...player.discard, discarded[0]],
                    player: player.player,
                    token: player.token,
                    a: player.a,
                    b: player.b,
                },
            })
        );
    };

    const shuffle = (deck) => {
        const shuffled = Math.floor(Math.random() * deck.length);
        return shuffled;
    };

    const clearTable = (table, player) => {
        dispatch({
            type: `UPDATE_DECK${player.player}`,
            payload: {
                name: player.name,
                deck: player.deck,
                hand: player.hand,
                health: player.health,
                discard: drawNDiscard(table, player),
                player: player.player,
                token: player.token,
                a: player.a,
                b: player.b,
            },
        });

        return dispatch({ type: 'CLEAR_TABLE' });
    };

    return {
        generateDeck,
        generateStartingHand,
        updateDeck,
        drawCard,
        discard,
        drawNDiscard,
        shuffle,
        clearTable,
    };
};

export default useDeck;
