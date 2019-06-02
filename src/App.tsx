import React, { useState, useEffect } from 'react';

import BudgetDisplay from './BudgetDisplay/BudgetDisplay';
import EntryForm from './EntryForm/EntryForm';
import List from './ListsView/List';
import { generateIncomes, generateExpenses } from './shared/helpers';
import './App.scss';

const App = () => {
    const [budget, setBudget] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [incomesList, setIncomesList] = useState(generateIncomes());
    const [expensesList, setExpensesList] = useState(generateExpenses());

    useEffect(() => {
        setBudget(totalIncome - totalExpense);
    }, [totalIncome, totalExpense]);

    useEffect(() => {
        let total = incomesList.reduce((acc, inc) => acc + inc.value, 0);
        setTotalIncome(total);
    }, [incomesList]);

    useEffect(() => {
        let total = expensesList.reduce((acc, exp) => acc + exp.value, 0);
        setTotalExpense(total);
    }, [expensesList]);

    const addEntry = (category: string, description: string, value: number) => {
        const newEntry = {
            id: `${Date.now()}`,
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

    const deleteIncome = (id: string) =>
        setIncomesList(incomesList.filter(entry => entry.id !== id));

    const deleteExpense = (id: string) =>
        setExpensesList(expensesList.filter(entry => entry.id !== id));

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
            <div className='ListsView'>
                <List
                    category='income'
                    entries={incomesList}
                    total={totalIncome}
                    onDelete={deleteIncome}
                />
                <List
                    category='expense'
                    entries={expensesList}
                    total={totalExpense}
                    onDelete={deleteExpense}
                />
            </div>
        </React.Fragment>
    );
};

export default App;
