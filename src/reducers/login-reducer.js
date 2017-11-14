import * as types from '../actions/action-types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.AUTHENTICATED: {
            return Object.assign({}, state, {
                authenticated: true,
                username: action.username,
            });
        }
        default:
            return state;
    }
};
