import * as types from './action-types';

export function changeModal(modal) {
    return {
        type: types.CHANGE_MODAL,
        modal,
    };
}

export function displayModal() {
    return {
        type: types.DISPLAY_MODAL,
    };
}

export function closeModal() {
    return {
        type: types.CLOSE_MODAL,
    };
}

