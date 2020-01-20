import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import maapReducer from '../reducers';
const maapStore = createStore(maapReducer, applyMiddleware(thunk));

export default maapStore;