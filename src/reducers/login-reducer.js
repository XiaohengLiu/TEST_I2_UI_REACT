import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case types.LOGIN: {
            console.log('login reducer...');
            return state;
        }
        default:
            return state;
    }
};
