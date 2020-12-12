import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { showError, hideError } from '../actions/error/error-actions';
import { feetchEventAsync } from '../actions/event/event-actions';

const initialErrorState = { error: -1, message: '' };
const error = createReducer(initialErrorState)
  .handleAction([showError], (_, action) => ({ error: 1, message: action.payload.message }))
  .handleAction([hideError, feetchEventAsync.success], () => ({ error: 0, message: '' }));

const errorReducer = combineReducers({
  error,
});

export default errorReducer;
