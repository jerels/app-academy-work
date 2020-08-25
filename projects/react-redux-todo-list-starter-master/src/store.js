import { createStore } from 'redux';
import tasksReducer from './reducers/tasksReducer';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();
const store = createStore(tasksReducer, preloadedState);

store.subscribe(() => saveState(store.getState()));

export default store;