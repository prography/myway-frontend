import { combineReducers } from 'redux';
import { createReducer } from 'utils/redux';
import { addReservationEntity, getReservationInfoEntity } from 'store/pay/action';
import { reservationInfo } from 'models/reservationInfo';

export type PayState = {
  addReservation: {
    status: Status;
    items: number;
  };
  getReservationInfo: {
    status: Status;
    items: reservationInfo;
  };
};

const initialState: PayState = {
  addReservation: {
    status: 'INIT',
    items: 0,
  },
  getReservationInfo: {
    status: 'INIT',
    items: {
      adReservationInfo: {
        adReservationId: '',
        createdAt: '',
        paidAmount: 0,
        adTimeTables: [{
          adDate: '',
          adHour: 0,
          partnerAddress: '',
          partnerImgUrl: '',
          partnerPhone: '',
          partnerPricePerHour: 0,
          partnerStoreName: '',
        }],
      },
    },
  },
};

const addReservationReducer = createReducer(
  addReservationEntity,
  initialState.addReservation,
);

const getReservationInfoReducer = createReducer(
  getReservationInfoEntity,
  initialState.getReservationInfo,
);

export default combineReducers({
  addReservation: addReservationReducer,
  getReservationInfo: getReservationInfoReducer,
});
