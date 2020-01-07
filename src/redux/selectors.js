import { createSelector } from 'reselect';

export const getExpenses = state => state.expenses;

export const getBudget = state => state.budget;

export const getTotalExpenses = createSelector([getExpenses], expenses =>
  expenses.reduce((total, expense) => total + expense.amount, 0),
);

export const getBalance = createSelector(
  [getBudget, getTotalExpenses],
  (budget, expenses) => budget - expenses,
);

export const getExpenseById = (state, id) =>
  getExpenses(state).find(expense => expense.id === id);
