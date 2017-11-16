import * as types from '../actions/action-types';

const initialState = {
    showModal: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MODAL: {
            return state;
        }
        case types.DISPLAY_MODAL: {
            return Object.assign({}, state, {
                showModal: true,
            })
        }
        case types.CLOSE_MODAL: {
            return Object.assign({}, state, {
                showModal: false,
            })
        }
        default:
            return state;
    }
}