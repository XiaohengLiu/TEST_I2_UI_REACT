import people from './people-reducer.js';
import login from './login-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people,
  login
});

export default rootReducer;
