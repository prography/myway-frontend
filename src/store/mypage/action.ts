import { createEntity } from '../../utils/redux';
import * as mypageApi from '../../api/mypage';

export const GET_RESERVATION_INFO = 'GET_RESERVATION_INFO';


export const getReservationInfoEntity = createEntity(
  GET_RESERVATION_INFO,
  mypageApi.getReservationInfo,
);

export const getReservationInfo = (reservationId: number) => ({
  type: GET_RESERVATION_INFO,
  reservationId,
});

export type GetReservationInfo = ReturnType<typeof getReservationInfo>;
