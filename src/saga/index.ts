import { all, fork } from 'redux-saga/effects';

import partnerSaga from './partner';
import authSaga from './auth';
import paySaga from './pay';

export default function* rootSaga() {
  yield all([fork(partnerSaga), fork(authSaga), fork(paySaga)]);
}
