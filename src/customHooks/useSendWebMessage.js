import { useContext } from 'react';
import Store from './../context/store';

const useSendWebMessage = () => {
    const { dispatch, client, pone, ptwo } = useContext(Store);

    const sendNote = (payload) => {
        console.log(`payload`, payload);

        if (client) {
            console.log(`client`, client);
            client.send(
                JSON.stringify({
                    type: payload.type,
                    id: 'fdfd',
                    msg: { username: payload.username, [payload.type]: payload.value },
                })
            );
        }
    };

    return { sendNote };
};

export default useSendWebMessage;
