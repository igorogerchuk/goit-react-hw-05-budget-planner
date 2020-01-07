import types from './types';
import { combineReducers } from 'redux';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [...state, payload.expense];

    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload.expense.id);

    default:
      return state;
  }
};

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.SAVE_BUDGET:
      return payload.value;

    default:
      return state;
  }
};

export default combineReducers({
  expenses: expensesReducer,
  budget: budgetReducer,
});
