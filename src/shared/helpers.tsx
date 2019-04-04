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
