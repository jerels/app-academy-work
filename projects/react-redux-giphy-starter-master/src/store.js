import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';


const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    return store;
}

export default configureStore;

// TODO: Import `createStore` from `redux`
// TODO: Import middleware
// TODO: Import `rootReducer`

// TODO: Define a `configureStore` function

// TODO: Export the `configureStore` function
