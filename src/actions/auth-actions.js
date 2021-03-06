import * as types from './action-types';

export const login = (user) => (dispatch) => {
    return new Promise(function(resolve, reject) {
        dispatch({
            type: types.AUTHENTICATED,
            user: user
        }).then(resolve());
    });
}

export const logout = (user) => (dispatch) => {
    dispatch({
        type: types.LOGOUT,
        user: user
    });
}