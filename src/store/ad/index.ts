import { combineReducers } from 'redux';
import { createReducer } from 'utils/redux';
import { addReservationEntity } from 'store/pay/action';

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
  addReservationEntity,
  initialState.uploadAd,
);

export default combineReducers({
  uploadAd: uploadAdReducer,
});
