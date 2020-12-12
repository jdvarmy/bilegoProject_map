import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errorReducer from './error-reducer';
import eventReducer from './event-reduser';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    errorReducer,
    eventReducer,
  });

export default rootReducer;
