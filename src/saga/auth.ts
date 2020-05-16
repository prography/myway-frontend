import { all, fork, take, call } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import { 
  joinEntity,
  JOIN,
  Join,
} from 'store/auth/action';

const fetchJoin = fetchEntity(joinEntity);

function* watchJoin() {
  while (true) {
    const { params }: Join = yield take(JOIN);
    yield call(fetchJoin, params);
  }
}

export default function* authSaga() {
  yield all([
    fork(watchJoin),
  ]);
}