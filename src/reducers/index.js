import { combineReducers } from 'redux';
import rcsMsgReducer from './rcsMsgReducer';

const maapReducer = combineReducers({
    rcsMsgData: rcsMsgReducer
});

export default maapReducer;