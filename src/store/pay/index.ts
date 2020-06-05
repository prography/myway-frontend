import { combineReducers } from 'redux';
import { createReducer } from 'utils/redux';
import { addReservationEntity } from 'store/pay/action';

export type PayState = {
  addReservation: {
    status: Status;
  };
};

const initialState: PayState = {
  addReservation: {
    status: 'INIT',
  },
};

const addReservationReducer = createReducer(
  addReservationEntity,
  initialState.addReservation,
);

export default combineReducers({
  addReservation: addReservationReducer,
});
