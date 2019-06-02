import React from 'react';

import './Entry.scss';
import { formatNumber, calcPercentage } from '../../shared/helpers';

type EntryProps = {
    key: string;
    category: string;
    description: string;
    value: number;
    total: number;
    delete: () => void;
};

const EntryItem = (props: EntryProps) => {
    return (
        <div className='Entry'>
            <div className='Entry__description'>{props.description}</div>
            <div className='Entry__right'>
                <div className='Entry__value'>
                    {formatNumber(props.value, props.category)}
                </div>
                <div
                    className={`Entry__percentage ${
                        props.category
                    }__percentage`}>
                    {calcPercentage(props.value, props.total)}
                </div>
                <div className='Entry__delete' onClick={props.delete}>
                    <button
                        className={`Entry__button Entry__button--${
                            props.category
                        }`}>
                        <i className='material-icons button--delete'>
                            remove_circle_outline
                        </i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EntryItem;
