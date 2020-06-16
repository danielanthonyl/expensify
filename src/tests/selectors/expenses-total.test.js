import getExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses ', () => {
  expect(getExpenses([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  expect(getExpenses([expenses[0]])).toBe(195);
});

test('should correctly add up multiple expense', () => {
  expect(getExpenses(expenses)).toBe(114195);
});