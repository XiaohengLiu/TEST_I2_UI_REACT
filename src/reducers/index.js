import people from './people-reducer.js';
import login from './auth-reducer';
import dashboard from './dashboard-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people,
  login,
  dashboard
});

export default rootReducer;
