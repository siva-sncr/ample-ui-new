import * as actionTypes from '../mainContent/rcsMessaging/actions/rcsMsgActionTypes';

const intialState = {
    token: null,
    list: [],
    loading: false
}

const rcsMsgReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_RCSMSG_SUBMIT:
            return {
                ...currentState,
                list: action.list,
                loading: action.loading
            }
        case actionTypes.ON_LOADING:
            return {
                ...currentState,
                loading: action.loading
            }
        default:
            return currentState
    }
}

export default rcsMsgReducer;