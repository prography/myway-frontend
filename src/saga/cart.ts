import { all, fork, takeLatest, call, take } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import {
  getCartInfoEntity,
  GET_CART_INFO,
  getCartInfo,
} from 'store/cart/action';

const fetchCartInfo = fetchEntity(getCartInfoEntity);

function* watchGetCartInfo() {
  const { params } = yield take(GET_CART_INFO);
  yield call(fetchCartInfo, params);
}

export default function* partnerSaga() {
  yield all([fork(watchGetCartInfo)]);
}
