import * as actionTypes from './rcsMsgActionTypes';

export const onRcsMsgSubmit = (res) => {
    return {
        type: actionTypes.ON_RCSMSG_SUBMIT,
        list: [res],
        loading: false
    };
};

export const onLoading = (res) => {
    return {
        type: actionTypes.ON_LOADING,
        loading: res
    };
};