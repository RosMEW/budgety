import React from 'react';

import { formatNumber } from '../../shared/helpers';
import './BudgetPanel.scss';

type BudgetPanel = {
    category: string;
    value: number;
    percentage: string;
};

const BudgetPanel = (props: BudgetPanel) => {
    const panelClasses: string[] = ['BudgetPanel'];
    panelClasses.push(
        props.category === 'income' ? 'Panel__income' : 'Panel__expenses'
    );

    return (
        <div className={panelClasses.join(' ')}>
            <div className='BudgetPanel__category'>{props.category}</div>
            <div className='BudgetPanel__right'>
                <div className='BudgetPanel__right--value'>
                    {formatNumber(props.value, props.category)}
                </div>
                {props.category === 'expenses' ? (
                    <div className='BudgetPanel__right--percentage transparentPanel'>
                        {props.percentage}
                    </div>
                ) : (
                    <div className='BudgetPanel__right--percentage' />
                )}
            </div>
        </div>
    );
};

export default BudgetPanel;
