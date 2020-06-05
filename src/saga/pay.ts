import { all, fork, take, call } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import {
  addReservationEntity,
  ADD_RESERVATION,
  AddReservation,
} from 'store/pay/action';

const fetchAddReservation = fetchEntity(addReservationEntity);

function* watchAddReservation() {
  while (true) {
    const { params }: AddReservation = yield take(ADD_RESERVATION);
    yield call(fetchAddReservation, params);
  }
}

export default function* paySaga() {
  yield all([fork(watchAddReservation)]);
}
