import * as types from './action-types';

export const addVm = (vm) => (dispatch) => {
    return new Promise(function(resolve, reject) {
        dispatch({
            type: types.ADD_VM,
            vm: vm
        }).then(resolve());
    });
}

export const removeVm = (vm) => (dispatch) => {
    dispatch({
        type: types.REMOVE_VM,
        user: vm
    });
}