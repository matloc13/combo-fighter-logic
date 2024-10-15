import React, { useContext, useState, useEffect } from 'react';
import Store from './../context/store';
import User from './../components/User';
import { useSendWebMessage } from './../customHooks/index';

const JoinGame = () => {
    const { dispatch } = useContext(Store);
    const [userName, setuserName] = useState({ username: 'hello' });
    const [showInput, setShowInput] = useState(true);
    const { sendNote } = useSendWebMessage();
    const existingGames = [{ game: 1, player: '' }, { game: 2 }, { game: 3 }];

    useEffect(() => {
        const usernameLocal = JSON.parse(localStorage.getItem('username'));
        if (usernameLocal.username !== userName.username) {
            console.log(`usernameLocal`, usernameLocal);
            setuserName({ ...userName, username: usernameLocal.username });
            setShowInput(!showInput);
        }
        return () => {};
    }, [userName]);

    const joinGame = () => {
        // return setGameJoined(true);
    };
    const startGame = () => {
        sendNote({ type: 'command', value: 'start_new_game', username: userName.username });
        // return setGameJoined(true);
    };
    const submitName = () => {
        localStorage.setItem('username', JSON.stringify(userName));
        // TODO
        // dispatch({ type: 'UPDATE_PONE_USERNAME', payload: userName });
        // dispatch({ type: 'UPDATE_PTWO_USERNAME', payload: userName });
    };

    const updateInput = (e) => {
        e.persist();
        console.log(`e.name`, e.target.name);
        setuserName({ ...userName, [e.target.name]: e.target.value });
    };

    return (
        <main>
            <section>
                <User username={userName.username} />
                {showInput ? (
                    <>
                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            name="username"
                            value={userName.username}
                            onChange={updateInput}
                        />
                        <button onClick={submitName}>updateUserName</button>
                    </>
                ) : (
                    ''
                )}
            </section>
            <section className="games-available">
                <article className="existing-games">
                    {existingGames.map((games, i) => (
                        <button key={i + i * 2} onClick={joinGame}>
                            game:{games.game}
                        </button>
                    ))}
                </article>
            </section>
            <section className="new-game">
                <article>
                    <button className="new-game" onClick={startGame}>
                        New Game
                    </button>
                </article>
            </section>
        </main>
    );
};

export default JoinGame;
