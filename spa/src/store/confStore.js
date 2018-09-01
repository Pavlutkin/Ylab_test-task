import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer} from './reducer.js';

export function configureStore() {
    return createStore(
        reducer,
        applyMiddleware(thunkMiddleware)
    )
}