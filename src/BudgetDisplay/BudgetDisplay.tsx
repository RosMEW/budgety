import React from 'react';

import BudgetView from './BudgetView/BudgetView';
import BudgetPanel from './BudgetPanel/BudgetPanel';
import { calcPercentage } from '../shared/utilities';
import './BudgetDisplay.scss';

type BudgetDisplay = {
    budget: number;
    totalIncome: number;
    totalExpenses: number;
};

const BudgetDisplay = (props: BudgetDisplay) => {
    const budgetCategory = props.budget >= 0 ? 'income' : 'expenses';

    return (
        <div className='BudgetDisplay'>
            <BudgetView month='September' value={props.budget} />
            <BudgetPanel
                category='income'
                value={props.totalIncome}
                percentage=''
            />
            <BudgetPanel
                category='expenses'
                value={props.totalExpenses}
                percentage={calcPercentage(
                    props.totalExpenses,
                    props.totalIncome
                )}
            />
        </div>
    );
};

export default BudgetDisplay;
