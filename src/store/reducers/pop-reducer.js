import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { showPop, hidePop } from '../actions/popup/popup-action';

const pop = createReducer({})
  .handleAction([showPop], () => {
    console.log('show pop');
    return { show: true };
  })
  .handleAction([hidePop], () => {
    console.log('hide pop');
    return { show: false };
  });

const popReducer = combineReducers({
  pop,
});

export default popReducer;
