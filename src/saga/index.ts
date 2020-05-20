import { all, fork } from 'redux-saga/effects';

import partnerSaga from './partner';
import authSaga from './auth';

export default function* rootSaga() {
  yield all([
    fork(partnerSaga),
    fork(authSaga),
  ]);
}