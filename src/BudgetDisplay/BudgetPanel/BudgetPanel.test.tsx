import React from 'react';
import { render, cleanup } from 'react-testing-library';

import BudgetPanel from './BudgetPanel';

const setup = (category: string = 'income') => {
    const props = {
        category,
        value: 1000,
        percentage: '10 %'
    };
    cleanup();
    const wrapper = render(<BudgetPanel {...props} />);

    return { wrapper, props };
};

describe('<BudgetPanel />', () => {
    it('should render without crashing', () => {
        setup();
    });

    it('should have Panel__expense class', () => {
        const { wrapper } = setup();
        const panels = wrapper.container.getElementsByClassName(
            'Panel__income'
        );
        expect(panels.length).toEqual(1);
    });

    it('should have Panel__expense class', () => {
        const { wrapper } = setup('expense');
        const panels = wrapper.container.getElementsByClassName(
            'Panel__expense'
        );
        expect(panels.length).toEqual(1);
    });

    it('should not have percentage', () => {
        const { wrapper } = setup();
        const percentagePanel = wrapper.container.getElementsByClassName(
            'BudgetPanel__right--percentage'
        )[0];
        expect(percentagePanel.innerHTML).toEqual('');
    });

    it('should have percentage', () => {
        const { wrapper, props } = setup('expense');
        const percentagePanel = wrapper.container.getElementsByClassName(
            'BudgetPanel__right--percentage'
        )[0];
        expect(percentagePanel.innerHTML).toEqual(props.percentage);
    });
});
