import React from 'react';
import { CardController } from './index';

const Card = ({ card, i, player, eligible }) => {
    return (
        <div key={i} className={`card-container ${eligible}`}>
            <div className={`top-left ${card.color} ${card.btnIcon}`}></div>
            <div className="top-right">
                {' '}
                <h5>{card.name}</h5>
            </div>
            <div className="middle-left">
                <div className="openingD">
                    <span className="type">OD</span>{' '}
                    <span className="data">{card.openingDamage}</span>
                    {card.fighter === 'Grace Lee' &&
                        player.token === 'a' &&
                        card.color === 'red' && <span className="extraDamage">+1</span>}
                    {card.fighter === 'Gakere Baako' &&
                        player.token === 'b' &&
                        card.color === 'red' && <span className="extraDamage">*3</span>}
                </div>
                <div className="comboD">
                    <span className="type">CD ∆</span>
                    <span className="data">{card.comboDamage}</span>
                    {card.fighter === 'Grace Lee' &&
                        player.token === 'a' &&
                        card.color === 'red' && <span className="extraDamage">+1</span>}
                    {card.fighter === 'Gakere Baako' &&
                        player.token === 'b' &&
                        card.color === 'red' && <span className="extraDamage">*3</span>}
                </div>
            </div>
            <div className={`middle-right `}>
                <h4 className={`${card.initiative && 'init'}`}>
                    {card.fighter === 'Grace Lee' && player.token === 'a' && card.color === 'red'
                        ? card.initiative + 3
                        : card.initiative}
                </h4>
            </div>
            <div className="bottom-left">
                {card.comboBox.map((ele, i) => (
                    <div key={i} className={`${ele.color} ${ele.shape}`}></div>
                ))}
            </div>
            <div className="bottom-right">
                <CardController id={card.id} player={player} index={i} eligible={eligible} />
                <div className={`card version ${card.version}`}>{card.version}</div>
            </div>
        </div>
    );
};

export default Card;
