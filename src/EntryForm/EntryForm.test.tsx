import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import EntryForm from './EntryForm';

const setup = () => {
    const props = {
        addEntry: jest.fn()
    };
    cleanup();
    const wrapper = render(<EntryForm {...props} />);

    return { wrapper, props };
};

describe('<EntryForm />', () => {
    it('should add entry', () => {
        const { wrapper, props } = setup();

        // Fill description input
        const descriptionInput = wrapper.container.getElementsByClassName(
            'EntryForm__description'
        )[0];
        fireEvent.change(descriptionInput, { target: { value: 'Salary' } });

        // Fill value input
        const valueInput = wrapper.container.getElementsByClassName(
            'EntryForm__value'
        )[0];
        fireEvent.change(valueInput, { target: { value: 2000 } });

        // Click on add button
        const addButton = wrapper.container.getElementsByClassName(
            'EntryForm__button'
        )[0];
        fireEvent.click(addButton);

        expect(props.addEntry).toHaveBeenCalledTimes(1);
        expect(props.addEntry).toHaveBeenCalledWith('income', 'Salary', 2000);
    });
});
