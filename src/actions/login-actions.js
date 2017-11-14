import * as types from './action-types';

export const login = (user) => {
    console.log('login-action -> login: ', user);
    return {
        type: types.AUTHENTICATED,
        user
    };
}
