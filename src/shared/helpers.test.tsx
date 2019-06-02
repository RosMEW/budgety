import 'react';
import { calcPercentage, formatNumber } from './helpers';

describe('helpers', () => {
    describe('calcPercentage', () => {
        it('should return 0 %', () => {
            expect(calcPercentage(0, 0)).toEqual('0 %');
        });

        it('should return 10 %', () => {
            expect(calcPercentage(10, 100)).toEqual('10 %');
        });
    });

    describe('formatNumber', () => {
        it('should return + 1,000.00', () => {
            expect(formatNumber(1000, 'income')).toEqual('+ 1,000.00');
        });

        it('should return - 1,000.00', () => {
            expect(formatNumber(1000, 'expense')).toEqual('- 1,000.00');
        });

        it('should return + 100.00', () => {
            expect(formatNumber(100, 'income')).toEqual('+ 100.00');
        });
    });
});
