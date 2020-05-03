import { all, fork } from 'redux-saga/effects';

import partnerSaga from './partner';

export default function* rootSaga() {
  yield all([fork(partnerSaga)]);
}