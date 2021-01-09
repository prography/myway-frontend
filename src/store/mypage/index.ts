import { combineReducers } from 'redux';
import { createReducer } from '../../utils/redux';
import { getReservationInfoEntity } from './action';
import { reservationInfo } from '../../models/reservationInfo';


type Status = 'INIT' | 'REQUEST' | 'SUCCESS' | 'FAILURE';

export type MypageState = {
  getReservationInfo: {
    status: Status;
    items: reservationInfo;
  };
};

const initialState: MypageState = {
  getReservationInfo: {
    status: 'INIT',
    items: {
      adReservationInfo: {
        adReservationId: '',
        createdAt: '',
        paidAmount: 0,
        adStatus:0,
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

const getReservationInfoReducer = createReducer(
  getReservationInfoEntity,
  initialState.getReservationInfo,
);

export default combineReducers({
  getReservationInfo: getReservationInfoReducer,
});
