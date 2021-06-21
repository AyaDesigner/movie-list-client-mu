
import { createStore } from 'redux';
import allReducers from './reducers/moviesReducer';


const store = createStore(allReducers);
  

export default store;