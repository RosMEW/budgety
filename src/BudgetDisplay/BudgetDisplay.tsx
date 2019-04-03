import React from 'react';

import BudgetView from './BudgetView/BudgetView';
import BudgetPanel from './BudgetPanel/BudgetPanel';
import { calcPercentage } from '../shared/helpers';

type BudgetDisplay = {
    budget: number;
    totalIncome: number;
    totalExpenses: number;
};

const BudgetDisplay = (props: BudgetDisplay) => {
    return (
        <div>
            <BudgetView value={props.budget} />
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
