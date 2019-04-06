import React from 'react';

import { formatNumber } from '../../shared/helpers';
import './BudgetView.scss';

type BudgetViewProps = {
    value: number;
};

const BudgetView = (props: BudgetViewProps) => {
    const category = props.value >= 0 ? 'income' : 'expense';

    const date = new Date();
    const month = date.getMonth();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const year = date.getFullYear();
    const monthYear = months[month] + ' ' + year;

    return (
        <div className='BudgetView'>
            <p className='BudgetView__title'>
                Available Budget in{' '}
                <span className='BudgetView__title--month'>{monthYear}</span>
            </p>
            <p className='BudgetView__value'>
                {formatNumber(props.value, category)}
            </p>
        </div>
    );
};

export default BudgetView;
