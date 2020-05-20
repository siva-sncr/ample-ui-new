import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import treeReducer from './treeViewReducer';

const reducer = combineReducers({
    loginReducer: loginReducer,
    treeReducer: treeReducer
});

export default reducer;