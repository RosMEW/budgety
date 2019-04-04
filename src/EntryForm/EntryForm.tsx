import React, { useState } from 'react';

import './EntryForm.scss';

type EntryFormProps = {
    addEntry: (category: string, description: string, value: number) => void;
};

const EntryForm = (props: EntryFormProps) => {
    const [category, setCategory] = useState('income');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState();

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const onDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(event.target.value);
    };

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <form
            className='EntryForm'
            onSubmit={event => {
                props.addEntry(category, description, value);
                event.preventDefault();
                (event.target as HTMLFormElement).reset();
            }}>
            <select
                className='EntryForm__category EntryForm__input'
                defaultValue={category}
                onChange={onSelectChange}>
                <option value='income'>+</option>
                <option value='expense'>&minus;</option>
            </select>
            <input
                type='text'
                className='EntryForm__description EntryForm__input'
                placeholder='Add Description'
                onChange={onDescriptionChange}
                required
            />
            <input
                type='number'
                className='EntryForm__value EntryForm__input InputNumber'
                placeholder='Value'
                onChange={onValueChange}
                required
            />
            <button className='EntryForm__button'>
                <i className='material-icons'>add_circle_outline</i>
            </button>
        </form>
    );
};

export default EntryForm;
