import { all, fork, take, call } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import {
  uploadAdEntity,
  UPLOAD_AD,
  UploadAd,
} from 'store/ad/action';

const fetchUploadAd = fetchEntity(uploadAdEntity);

function* watchUploadAd() {
  while (true) {
    const { params }: UploadAd = yield take(UPLOAD_AD);
    yield call(fetchUploadAd, params);
  }
}

export default function* adSaga() {
  yield all([fork(watchUploadAd)]);
}
