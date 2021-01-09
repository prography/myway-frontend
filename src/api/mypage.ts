import fetcher from '../utils/fetcher';
import { getAuthToken } from '../utils/auth';
import { reservationInfo } from '../models/reservationInfo';


export const getReservationInfo = async (reservationId: number) => {
  const token = getAuthToken()?.toString();
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await fetcher.get<{ data: reservationInfo }>(`/ab-reservations/${reservationId}/info`, {
    headers,
  });

  return data.data;
}