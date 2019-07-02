import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import asyncReducer from './reducers/reducer';

const store = createStore(asyncReducer, applyMiddleware(thunk));

export default store
