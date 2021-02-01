import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { hideCard, showCard } from '../actions/paycard/paycard';

const isCardOpen = createReducer(false)
  .handleAction(showCard, () => true)
  .handleAction(hideCard, () => false);

const payCardReducer = combineReducers({
  isCardOpen,
});

export default payCardReducer;
