import fetcher from 'utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface AddReservationParams {
  impUid: string;
  merchantUid: string;
  payMethod: string;
  paidAmount: string;
  pgTid: string;
  paidAt: string;
  adTimes: number[];
}

export const addReservation = async (params: AddReservationParams) => {
  const token = getAuthToken()?.toString();
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await fetcher.post('/ad-reservations', params, {
    headers,
  });

  return data.data;
};
