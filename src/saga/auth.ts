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
  ME,
  Me,
} from 'store/auth/action';

const fetchJoin = fetchEntity(joinEntity);
const fetchLogin = fetchEntity(loginEntity);
const fetchMe = fetchEntity(meEntity);

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

export default function* authSaga() {
  yield all([
    fork(watchJoin),
    fork(watchLogin),
    fork(watchMe),
  ]);
}