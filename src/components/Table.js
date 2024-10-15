import React, { useContext } from 'react';
import { Card, Matcher } from './index';
import { useComboMatcher } from './../customHooks/index';
import store from './../context/store';

const Table = ({ table }) => {
    const { matching, matchAmount } = useComboMatcher(table);
    const { pone, ptwo } = useContext(store);

    return (
        <section className="table-container">
            {table.p1.length && (
                <>
                    <Matcher matching={matching} matchAmount={matchAmount} />
                </>
            )}

            {table.p2.length && (
                <>
                    <Matcher matching={matching} matchAmount={matchAmount} />
                </>
            )}

            <aside className="table1">
                {table.p1 &&
                    table.p1.map((card, i) => <Card card={card} i={i} key={i} player={pone} />)}
            </aside>
            <aside className="table2">
                {table.p2 &&
                    table.p2.map((card, i) => <Card card={card} i={i} key={i} player={ptwo} />)}
            </aside>
        </section>
    );
};

export default Table;
