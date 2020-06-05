import { all, fork, takeLatest, take, call } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import { 
  getPartnersEntity, 
  GET_PARTNERS,
  getPartnerDetailEntity,
  GET_PARTNER_DETAIL,
  GetPartnerDetail,
  applyPartnerEntity,
  APPLY_PARTNER,
  ApplyPartner,
} from 'store/partner/action';

const fetchGetPartners = fetchEntity(getPartnersEntity);
const fetchGetPartnerDetail = fetchEntity(getPartnerDetailEntity);
const fetchApplyPartner = fetchEntity(applyPartnerEntity);

function* watchGetPartners() {
  yield takeLatest(GET_PARTNERS, fetchGetPartners);
}

function* watchGetPartnerDetail() {
  while (true) {
    const { id }: GetPartnerDetail = yield take(GET_PARTNER_DETAIL);
    yield call(fetchGetPartnerDetail, id);
  }
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
    fork(watchGetPartnerDetail),
    fork(watchApplyPartner),
  ]);
}