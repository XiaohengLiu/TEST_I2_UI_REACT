import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}
