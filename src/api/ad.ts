import fetcher from 'utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface UploadAdParams {
  id: number;
  file: any;
}

export const uploadAd = async (params: UploadAdParams) => {
  const { id } = params;
  const token = getAuthToken();
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await fetcher.put(`/ad-reservations/${id}/ad-imgs`, params.file, { headers });

  return data.data;
};
