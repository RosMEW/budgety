import React from 'react';

import Entry from './Entry/Entry';
import { IEntry } from './Entry/Entry.model';
import './List.scss';

type ListProps = {
    category: string;
    entries: IEntry[];
    total: number;
    onDelete: (id: string) => void;
};

const List = (props: ListProps) => {
    const entriesJSX = props.entries.map(entry => (
        <Entry
            category={entry.category}
            key={entry.id}
            description={entry.description}
            value={entry.value}
            total={props.total}
            delete={() => props.onDelete(entry.id)}
        />
    ));

    return (
        <div className={`List ${props.category}`}>
            <h2 className='List__title'>{props.category}</h2>
            <div className='List__entries'>{entriesJSX}</div>
        </div>
    );
};

export default List;
