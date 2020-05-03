import { all, fork, takeLatest } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import { getPartnersEntity, GET_PARTNERS } from 'store/partner/action';

const fetchGetPartners = fetchEntity(getPartnersEntity);

function* watchGetPartners() {
  yield takeLatest(GET_PARTNERS, fetchGetPartners);
}

export default function* partnerSaga() {
  yield all([fork(watchGetPartners)]);
}