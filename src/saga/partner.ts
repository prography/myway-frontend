import { all, fork, takeLatest, take, call } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import { 
  getPartnersEntity, 
  GET_PARTNERS,
  applyPartnerEntity,
  APPLY_PARTNER,
  ApplyPartner,
} from 'store/partner/action';

const fetchGetPartners = fetchEntity(getPartnersEntity);
const fetchApplyPartner = fetchEntity(applyPartnerEntity);

function* watchGetPartners() {
  yield takeLatest(GET_PARTNERS, fetchGetPartners);
}

function* watchApplyPartner() {
    while (true) {
      const { params }: ApplyPartner = yield take(APPLY_PARTNER);
      yield call(fetchApplyPartner, params);
    }
}

export default function* partnerSaga() {
  yield all([
    fork(watchGetPartners),
    fork(watchApplyPartner),
  ]);
}