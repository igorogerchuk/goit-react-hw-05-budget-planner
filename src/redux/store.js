import { createStore } from 'redux';
import reducer from './reducer';
import localStorageHandler from '../services/localStorageHandler';

const persistedState = localStorageHandler.get();

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  localStorageHandler.set({
    expenses: store.getState().expenses,
    budget: store.getState().budget,
  });
});

export default store;
