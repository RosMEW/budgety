import React, { useState, useEffect } from 'react';

import BudgetDisplay from './BudgetDisplay/BudgetDisplay';
import EntryForm from './EntryForm/EntryForm';
import './App.scss';

const App = () => {
    const [budget, setBudget] = useState(0);
    const [totalIncome, setTotalIncome] = useState(5111.8);
    const [totalExpenses, setTotalExpenses] = useState(654);

    useEffect(() => {
        setBudget(totalIncome - totalExpenses);
    }, [totalIncome, totalExpenses]);

    return (
        <React.Fragment>
            <div className='top'>
                <BudgetDisplay
                    budget={budget}
                    totalIncome={totalIncome}
                    totalExpenses={totalExpenses}
                />
            </div>
            <div className='form'>
                <EntryForm />
            </div>
        </React.Fragment>
    );
};

export default App;
