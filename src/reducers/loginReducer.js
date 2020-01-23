import * as actionTypes from '../login/actions/loginActionTypes';
const intialState = {
    loggedIn: false,
    token: null,
}
const loginReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_LOGIN:
            return {
                ...currentState,
                loggedIn: action.loggedIn,
                token: action.loginData
            }
        default:
            return currentState
    }
}

export default loginReducer;