import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const reducer = combineReducers({
    loginReducer: loginReducer
});

export default reducer;