import { all } from 'redux-saga/effects';
import mapSaga from './map/map-saga';

export default function* rootSaga() {
  yield all([mapSaga()]);
}
