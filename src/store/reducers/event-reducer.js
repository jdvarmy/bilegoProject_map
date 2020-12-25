import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { feetchEventAsync } from '../actions/event/event-actions';

const initialEventState = {};

// eslint-disable-next-line max-len
const event = createReducer(initialEventState).handleAction(feetchEventAsync.success, (_, action) => ({
  ...action.payload,
}));

const eventReducer = combineReducers({
  event,
});

export default eventReducer;
