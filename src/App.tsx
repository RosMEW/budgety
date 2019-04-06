import React, { useState, useEffect } from 'react';

import BudgetDisplay from './BudgetDisplay/BudgetDisplay';
import EntryForm from './EntryForm/EntryForm';
import List from './ListsView/List';
import { IEntry } from './ListsView/Entry/Entry.model';
import './App.scss';
import { generateIncomes, generateExpenses } from './shared/helpers';

const App = () => {
    const [budget, setBudget] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [incomesList, setIncomesList] = useState([] as IEntry[]);
    const [expensesList, setExpensesList] = useState([] as IEntry[]);

    useEffect(() => {
        setIncomesList(generateIncomes());
        setExpensesList(generateExpenses());
    }, []);

    useEffect(() => {
        setBudget(totalIncome - totalExpense);
    }, [totalIncome, totalExpense]);

    useEffect(() => {
        let total = incomesList.reduce((acc, income) => acc + income.value, 0);
        setTotalIncome(total);
    }, [incomesList]);

    useEffect(() => {
        let total = expensesList.reduce(
            (acc, expense) => acc + expense.value,
            0
        );
        setTotalExpense(total);
    }, [expensesList]);

    const addEntry = (category: string, description: string, value: number) => {
        const newEntry = {
            id: `${Date.now()}`,
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
