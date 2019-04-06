export const calcPercentage = (value: number, total: number) => {
    if (total > 0) {
        return `${Math.round((value / total) * 100)} %`;
    } else {
        return '0 %';
    }
};

export const formatNumber = (value: number, category: string) => {
    const sign = category === 'income' ? '+' : '-';
    const number = Math.abs(value).toFixed(2);
    let [int, dec] = number.split('.');
    if (int.length > 3) {
        int =
            int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    return sign + ' ' + int + '.' + dec;
};

export const generateIncomes = () => [
    {
        id: '0',
        category: 'income',
        description: 'Salary',
        value: 1508.23
    },
    {
        id: '1',
        category: 'income',
        description: 'Bank Interest',
        value: 32.58
    }
];

export const generateExpenses = () => [
    {
        id: '2',
        category: 'expense',
        description: 'Groceries',
        value: 233.16
    },
    {
        id: '3',
        category: 'expense',
        description: 'Phone bill',
        value: 58.17
    },
    {
        id: '4',
        category: 'expense',
        description: 'Electricity bill',
        value: 78.65
    }
];
