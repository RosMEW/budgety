import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import EntryForm from './EntryForm';

const setup = () => {
    const props = {
        addEntry: jest.fn()
    };
    cleanup();
    const wrapper = render(<EntryForm {...props} />);

    return {
        wrapper,
        props,
        descriptionInput: wrapper.container.getElementsByClassName(
            'EntryForm__description'
        )[0],
        valueInput: wrapper.container.getElementsByClassName(
            'EntryForm__value'
        )[0],
        submitButton: wrapper.container.getElementsByClassName(
            'EntryForm__button'
        )[0]
    };
};

describe('<EntryForm />', () => {
    it('should add entry', () => {
        const { props, descriptionInput, valueInput, submitButton } = setup();
        fireEvent.change(descriptionInput, { target: { value: 'Salary' } });
        fireEvent.change(valueInput, { target: { value: 2000 } });
        fireEvent.click(submitButton);

        expect(props.addEntry).toHaveBeenCalledTimes(1);
        expect(props.addEntry).toHaveBeenCalledWith('income', 'Salary', 2000);
    });
});
