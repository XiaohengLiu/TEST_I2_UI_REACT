import people from './people-reducer.js';
import login from './auth-reducer';
import dashboard from './dashboard-reducer';
import modal from './modal-reducer';
import vms from './vm-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    people,
    login,
    dashboard,
    modal,
    vms,
});

export default rootReducer;
