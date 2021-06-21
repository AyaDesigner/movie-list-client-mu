
import moviesReducer from './moviesReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    moviesReducer: moviesReducer
});

export default allReducers;