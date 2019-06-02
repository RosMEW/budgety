export const calcPercentage = (value: number, total: number) => {
    return total > 0 ? `${Math.round((value / total) * 100)} %` : '0 %';
};

export const formatNumber = (value: number, category: string) => {
    const sign = category === 'income' ? '+' : '-';
    const number = Math.abs(value).toFixed(2);
    let [int, dec] = number.split('.');
    int = addCommasToNumber(int);
    return sign + ' ' + int + '.' + dec;
};
function addCommasToNumber(int: string) {
    let res: string[] = [];
    for (let i = 0; i < int.length; i++) {
        res.push(int[i]);
        if ((int.length - 1 - i) % 3 === 0 && i !== int.length - 1)
            res.push(',');
    }
    return res.join('');
}

// Demo helper
export const generateIncomes = () => [
    {
        id: '0',
        description: 'Salary',
        value: 1500.23
    },
    {
        id: '1',
        description: 'Bank Interest',
        value: 32.58
    }
];

export const generateExpenses = () => [
    {
        id: '2',
        description: 'Groceries',
        value: 233.16
    },
    {
        id: '3',
        description: 'Phone bill',
        value: 58.17
    },
    {
        id: '4',
        description: 'Electricity bill',
        value: 78.65
    }
];
