import React from 'react';
import { Hand, Confirm } from './index';

const Combo = ({ player }) => {
    return (
        <section className="combo-container">
            <Hand player={player} />
            <Confirm player={player} />
        </section>
    );
};

export default Combo;
