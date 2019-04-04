import React, { useState, useEffect } from 'react';

import BudgetDisplay from './BudgetDisplay/BudgetDisplay';
import EntryForm from './EntryForm/EntryForm';
import './App.scss';

type Entry = {
    id: string;
    category: string;
    description: string;
    value: number;
};

const App = () => {
    const [budget, setBudget] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [incomesList, setIncomesList] = useState([] as Entry[]);
    const [expensesList, setExpensesList] = useState([] as Entry[]);

    useEffect(() => {
        setBudget(totalIncome - totalExpense);
    }, [totalIncome, totalExpense]);

    useEffect(() => {
        let total = incomesList.reduce((acc, incomeEntry) => {
            return acc + incomeEntry.value;
        }, 0);
        setTotalIncome(total);
    }, [incomesList]);

    useEffect(() => {
        let total = expensesList.reduce((acc, expenseEntry) => {
            return acc + expenseEntry.value;
        }, 0);
        setTotalExpense(total);
    }, [expensesList]);

    const addEntry = (category: string, description: string, value: number) => {
        const newEntry = {
            id: `${description}+${value}`,
            category: category,
            description: description,
            value: value
        };

        if (category === 'income') {
            const newIncomesList = incomesList.concat(newEntry);
            setIncomesList(newIncomesList);
        } else {
            const newExpensesList = expensesList.concat(newEntry);
            setExpensesList(newExpensesList);
        }
    };

    return (
        <React.Fragment>
            <div className='top'>
                <BudgetDisplay
                    budget={budget}
                    totalIncome={totalIncome}
                    totalExpense={totalExpense}
                />
            </div>
            <div className='form'>
                <EntryForm addEntry={addEntry} />
            </div>
        </React.Fragment>
    );
};

export default App;
