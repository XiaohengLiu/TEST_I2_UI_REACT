import * as types from '../actions/action-types';

const initialState = {
    accessToken: null,
    user: null,
    permissions: [
        {name: 'dashboard', path:'/dash', style: 'dashboard-logo'},
        {name: 'account', path: '/account', style: 'account-logo'},
        {name: 'management', path: '/management', style: 'management-logo'},
        {name: 'virtualization', path: '/virtualization', style: 'virtualization-logo'},
        {name: 'diagnostics', path: '/diagnostics', style: 'diagnostics-logo'},
        {name: 'reporting', path: '/reporting', style: 'reporting-logo'},
        {name: 'security', path: '/security', style: 'security-logo'},
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
