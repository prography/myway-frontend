import { all, fork, take, call } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import {
  joinEntity,
  JOIN,
  Join,
  loginEntity,
  LOGIN,
  Login,
  meEntity,
  myOrderEntity,
  ME,
  Me,
  MYORDER,
  MyOrder,
} from 'store/auth/action';

const fetchJoin = fetchEntity(joinEntity);
const fetchLogin = fetchEntity(loginEntity);
const fetchMe = fetchEntity(meEntity);
const fetchMyOrder = fetchEntity(myOrderEntity);

function* watchJoin() {
  while (true) {
    const { params }: Join = yield take(JOIN);
    yield call(fetchJoin, params);
  }
}

function* watchLogin() {
  while (true) {
    const { params }: Login = yield take(LOGIN);
    yield call(fetchLogin, params);
  }
}

function* watchMe() {
  while (true) {
    const { token }: Me = yield take(ME);
    yield call(fetchMe, token);
  }
}

function* watchMyOrder() {
  while (true) {
    const { token }: MyOrder = yield take(MYORDER);
    yield call(fetchMyOrder, token);
  }
}

export default function* authSaga() {
  yield all([
    fork(watchJoin),
    fork(watchLogin),
    fork(watchMe),
    fork(watchMyOrder),
  ]);
}
