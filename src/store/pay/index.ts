import { combineReducers } from 'redux';
import { createReducer } from 'utils/redux';
import { addReservationEntity } from 'store/pay/action';

export type PayState = {
  addReservation: {
    status: Status;
    items: number;
  };
};

const initialState: PayState = {
  addReservation: {
    status: 'INIT',
    items: 0,
  },
};

const addReservationReducer = createReducer(
  addReservationEntity,
  initialState.addReservation,
);

export default combineReducers({
  addReservation: addReservationReducer,
});
