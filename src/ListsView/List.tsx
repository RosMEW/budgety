import React from 'react';

import EntryItem from './Entry/Entry';
import { Entry } from './Entry/Entry.model';
import './List.scss';

type ListProps = {
    category: string;
    entries: Entry[];
    total: number;
    onDelete: (id: string) => void;
};

const List = (props: ListProps) => {
    const { category, entries, total, onDelete } = props;

    return (
        <div className={`List ${category}`}>
            <h2 className='List__title'>{category}</h2>
            <div className='List__entries'>
                {entries.map(entry => (
                    <EntryItem
                        category={category}
                        key={entry.id}
                        description={entry.description}
                        value={entry.value}
                        total={total}
                        delete={() => onDelete(entry.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
