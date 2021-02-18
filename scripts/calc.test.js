const { test, expecte } = require("@jest/globals");
import { Calc } from "./calc.js"

// Declare the 'calc' variable in the global scope.
let calc;

// Before any test runs, initialize our 'calc' object 
// so it can be referenced in all the tests.
beforeAll(() => {
    calc = new Calc();
});

// Clean up after all of our tests have run.
afterAll(() => {
    calc = null;
});

test('add: 1 + 2 to equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
});

test('add: 2 + 1 to equal 3', () => {
    expect(calc.add(2, 1)).toBe(3);
});

test('subtract: 5 - 2 to equal 3', () => {
    expect(calc.subtract(5, 2)).toBe(3);
});

test('subtract: 2 - 5 to equal -3', () => {
    expect(calc.subtract(2, 5)).toBe(-3);
});

test('multiply: 3 * 1 to equal 3', () => {
    expect(calc.multiply(3, 1)).toBe(3);
});

test('multiply: 1 * 3 to equal 3', () => {
    expect(calc.multiply(1, 3)).toBe(3);
});

test('divide: 9 / 3 to equal 3', () => {
    expect(calc.divide(9, 3)).toBe(3);
});

test('divide: -15 / 5 to equal -3', () => {
    expect(calc.divide(-15, 5)).toBe(-3);
});