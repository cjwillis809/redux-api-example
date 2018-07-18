import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
/**
 * Our Redux Store
 */

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

export default store;