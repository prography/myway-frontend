import { createEntity } from 'utils/redux';
import * as payApi from 'api/pay';

export const ADD_RESERVATION = 'ADD_RESERVATION';

export const addReservationEntity = createEntity(
  ADD_RESERVATION,
  payApi.addReservation,
);

export const addReservation = (params: payApi.AddReservationParams) => ({
  type: ADD_RESERVATION,
  params,
});

export type AddReservation = ReturnType<typeof addReservation>;
