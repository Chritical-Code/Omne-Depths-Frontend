import { expect, test, describe } from 'vitest';
import { sum } from './practice.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('Math.sqrt', () => {
    test('returns the square root of perfect squares', () => {
        expect(Math.sqrt(4)).toBe(2);
        expect(Math.sqrt(9)).toBe(3);
    });

    test('returns NaN for negative numbers', () => {
        expect(Math.sqrt(-1)).toBeNaN();
    });

    test('returns 0 for 0', () => {
        expect(Math.sqrt(0)).toBe(0);
    });
});