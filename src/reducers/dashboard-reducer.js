import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case types.DASH_FOO: {
            console.log('Dashboard Foo reducer!');
            return state;
        }
        default:
            return state;
    }
};
