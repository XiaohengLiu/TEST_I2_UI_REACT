import * as types from '../actions/action-types';

const initialState = {
    accessToken: null,
    user: null,
    permissions: [
        {name: 'account', path: '/account'},
        {name: 'management', path: '/management'},
        {name: 'virtualization', path: '/virtualization'},
        {name: 'diagnostics', path: '/diagnostics'},
        {name: 'reporting', path: '/reporting'},
        {name: 'security', path: '/security'},
    ],
    type: '',
    operations: ['logout','system','shutdown Symce', 'Shutdown System', 'Restart Symce', 'Restart System'],
    authenticated: false,
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
        case types.LOGOUT: {
            console.log('logouted in reducer...');
            return Object.assign({}, state, {
                authenticated: false,
                username: '',
                type: '',
            });
        }
        default:
            return state;
    }
};
