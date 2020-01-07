import types from './types';
import shortid from 'shortid';

export const add = ({ name, amount }) => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expense: {
        id: shortid.generate(),
        name,
        amount: Number(amount),
      },
    },
  };
};

export const remove = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      expense: { id },
    },
  };
};

export const saveBudget = value => {
  return {
    type: types.SAVE_BUDGET,
    payload: { value: +value },
  };
};
