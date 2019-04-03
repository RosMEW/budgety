import React from 'react';

const EntryForm = () => {
    return (
        <div className='EntryForm'>
            <select className='EntryForm__category' defaultValue='income'>
                <option value='income'>+</option>
                <option value='expenses'>-</option>
            </select>
            <input
                type='text'
                className='EntryForm__description'
                placeholder='Add Description'
            />
            <input
                type='number'
                className='EntryForm__value'
                placeholder='Value'
                step='100'
            />
            <button className='EntryForm__button'>
                <i className='material-icons'>add_circle_outline</i>
                <i className='material-icons'>remove_circle_outline</i>
            </button>
        </div>
    );
};

export default EntryForm;
