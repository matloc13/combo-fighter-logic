import React, { useContext } from 'react';
import Store from './../context/store';
const Kagami = () => {
    const { kagamiStatus } = useContext(Store);
    return (
        <span className="kagami">
            {kagamiStatus.winOne === true ? '...breathe in' : ''}
            {kagamiStatus.winTwo === true ? 'breath out...' : ''}
            {kagamiStatus.winThree === true ? 'stay focused' : ''}
            {kagamiStatus.winFour === true ? ' Well DONE! you win' : ''}
        </span>
    );
};

export default Kagami;
