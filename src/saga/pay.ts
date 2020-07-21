import { all, fork, take, call } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import {
  addReservationEntity,
  ADD_RESERVATION,
  AddReservation,
  getReservationInfoEntity,
  GET_RESERVATION_INFO,
  GetReservationInfo,
} from 'store/pay/action';

const fetchAddReservation = fetchEntity(addReservationEntity);
const fetchGetReservationInfo = fetchEntity(getReservationInfoEntity);

function* watchAddReservation() {
  while (true) {
    const { params }: AddReservation = yield take(ADD_RESERVATION);
    yield call(fetchAddReservation, params);
  }
}

function* watchGetReservationInfo() {
  while (true) {
    const { reservationId }: GetReservationInfo = yield take(GET_RESERVATION_INFO);
    yield call(fetchGetReservationInfo, reservationId);
  }
}

export default function* paySaga() {
  yield all([fork(watchAddReservation), fork(watchGetReservationInfo)]);
}
