import * as types from './action-types';

export const dashFoo = (data) => {
    console.log('dashboard-actions foo!');
    return {
        type: types.DASH_FOO,
        data
    };
}
