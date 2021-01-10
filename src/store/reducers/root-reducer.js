import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errorReducer from './error-reducer';
import eventReducer from './event-reducer';
import basketReducer from './basket-reducer';
import popReducer from './pop-reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    errorReducer,
    eventReducer,
    basketReducer,
    popReducer,
  });

export default rootReducer;
