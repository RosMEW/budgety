import React from 'react';

import { formatNumber } from '../../shared/utilities';
import './BudgetView.scss';

type BudgetView = {
    month: string;
    value: number;
};

const BudgetView = (props: BudgetView) => {
    const category = props.value >= 0 ? 'income' : 'expenses';

    return (
        <div className='BudgetView'>
            <p className='BudgetView__title'>
                Available Budget in{' '}
                <span className='BudgetView__title--month'>{props.month}</span>
            </p>
            <p className='BudgetView__value'>
                {formatNumber(props.value, category)}
            </p>
        </div>
    );
};

export default BudgetView;
