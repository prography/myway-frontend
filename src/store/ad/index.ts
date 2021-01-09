import { combineReducers } from 'redux';
import { createReducer } from 'utils/redux';
import { uploadAdEntity } from 'store/ad/action';

export type AdState = {
  uploadAd: {
    status: Status;
  };
};

const initialState: AdState = {
  uploadAd: {
    status: 'INIT',
  },
};

const uploadAdReducer = createReducer(
  uploadAdEntity,
  initialState.uploadAd,
);

export default combineReducers({
  uploadAd: uploadAdReducer,
});
