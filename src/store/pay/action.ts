import { createEntity } from 'utils/redux';
import * as payApi from 'api/pay';

export const ADD_RESERVATION = 'ADD_RESERVATION';
export const GET_RESERVATION_INFO = 'GET_RESERVATION_INFO';

export const addReservationEntity = createEntity(
  ADD_RESERVATION,
  payApi.addReservation,
);

export const addReservation = (params: payApi.AddReservationParams) => ({
  type: ADD_RESERVATION,
  params,
});

export const getReservationInfoEntity = createEntity(
  GET_RESERVATION_INFO,
  payApi.getReservationInfo,
);

export const getReservationInfo = (reservationId: number) => ({
  type: GET_RESERVATION_INFO,
  reservationId,
});

export type AddReservation = ReturnType<typeof addReservation>;
export type GetReservationInfo = ReturnType<typeof getReservationInfo>;
