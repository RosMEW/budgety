import React from 'react';

import { formatNumber } from '../../shared/helpers';
import './BudgetPanel.scss';

type BudgetPanelProps = {
    category: string;
    value: number;
    percentage: string;
};

const BudgetPanel = (props: BudgetPanelProps) => {
    const panelClasses: string[] = [
        'BudgetPanel',
        props.category === 'income' ? 'Panel__income' : 'Panel__expense'
    ];

    return (
        <div className={panelClasses.join(' ')}>
            <div className='BudgetPanel__category'>{props.category}</div>
            <div className='BudgetPanel__right'>
                <div className='BudgetPanel__right--value'>
                    {formatNumber(props.value, props.category)}
                </div>
                {props.category === 'expense' ? (
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
