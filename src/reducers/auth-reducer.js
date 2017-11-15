import * as types from '../actions/action-types';

const initialState = {
    accessToken: null,
    user: null,
    permissions: ['account', 'management', 'virtualization','diagnostics','reporting','security'],
    type: '',
    operations: ['logout','system','shutdown Symce', 'Shutdown System', 'Restart Symce', 'Restart System'],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATED: {
            return Object.assign({}, state, {
                authenticated: true,
                username: action.username,
                type: 'administrator',
            });
        }
        default:
            return state;
    }
};
