import React from 'react';

const Button = ({ id, player, index, name, func }) => {
    return (
        <>
            <button onClick={() => func(id, player, index)} className={`${name}-button`}>
                <h3>{name}</h3>
            </button>
        </>
    );
};

export default Button;
