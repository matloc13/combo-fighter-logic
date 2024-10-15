import React from 'react';

const Matcher = ({ matching, matchAmount }) => {
    const matched = (symObj) => {
        if (symObj === true) {
            return 'matched';
        }
        return 'notmatched';
    };

    return (
        <div className="matcher">
            <aside className="matching">
                {matching.map((sym, i) => {
                    return (
                        <div className="sym" key={i}>
                            <h3 className="combo-name">{sym[0]}</h3>
                            <span>
                                <h4>Damage:{sym[1].damage}</h4>
                            </span>
                            <ul>
                                <li
                                    className={`sym ${sym[1].shape1 && sym[1].shape1.shape} ${
                                        sym[1].shape1 && sym[1].shape1.color
                                    } ${matched(matchAmount.symbol1)}`}
                                ></li>
                                <li
                                    className={`sym ${sym[1].shape2 && sym[1].shape2.shape} ${
                                        sym[1].shape2 && sym[1].shape2.color
                                    } ${matched(matchAmount.symbol2)}`}
                                ></li>
                                <li
                                    className={`sym ${sym[1].shape3 && sym[1].shape3.shape} ${
                                        sym[1].shape3 && sym[1].shape3.color
                                    } ${matched(matchAmount.symbol3)}`}
                                ></li>
                                <li
                                    className={`sym ${sym[1].shape4 && sym[1].shape4.shape} ${
                                        sym[1].shape4 && sym[1].shape4.color
                                    } ${matched(matchAmount.symbol4)}`}
                                ></li>
                                <li
                                    className={`bonus ${sym[1].bonus && sym[1].bonus.shape} ${
                                        sym[1].bonus && sym[1].bonus.color
                                    } ${matched(matchAmount.bonus)}`}
                                ></li>
                            </ul>
                        </div>
                    );
                })}
            </aside>
        </div>
    );
};

export default Matcher;
