import * as types from '../actions/action-types';

const initialState = {
    showModal: false,
    currentModal: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MODAL: {
            return state;
        }
        case types.DISPLAY_MODAL: {
            return Object.assign({}, state, {
                currentModal: action.modal,
                showModal: true,
            })
        }
        case types.CLOSE_MODAL: {
            return Object.assign({}, state, {
                showModal: false,
                currentModal: ''
            })
        }
        default:
            return state;
    }
}