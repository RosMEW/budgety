import React from 'react';

import BudgetView from './BudgetView/BudgetView';
import BudgetPanel from './BudgetPanel/BudgetPanel';
import { calcPercentage } from '../shared/helpers';

type BudgetDisplayProps = {
    budget: number;
    totalIncome: number;
    totalExpense: number;
};

const BudgetDisplay = (props: BudgetDisplayProps) => {
    return (
        <div>
            <BudgetView value={props.budget} />
            <BudgetPanel
                category='income'
                value={props.totalIncome}
                percentage=''
            />
            <BudgetPanel
                category='expense'
                value={props.totalExpense}
                percentage={calcPercentage(
                    props.totalExpense,
                    props.totalIncome
                )}
            />
        </div>
    );
};

export default BudgetDisplay;
