import * as types from '../actions/action-types';

const initialState = {
    vmList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_VM: {
            console.log('adding vm');
            return Object.assign({}, state, {
                vmList: [...state.vmList, action.vm]
            });
        }
        case types.REMOVE_VM: {
            console.log('removing vm');
            let vms = [];

            for (let vm of state.vmList) {
                if (action.vm.uuid !== vm.uuid) {
                    vms.push(action.vm);
                }
            }

            return Object.assign({}, state, {
                vmList: vms
            });
        }
        default:
            return state;
    }
};
