import fetcher from 'utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface UploadAdParams {
  id: number;
  file: any;
}

export const uploadAd = async (params: UploadAdParams) => {
  const { id, file } = params;
  const token = getAuthToken();
  const headers = token ? { 'x-access-token': token, 'content-type': 'multipart/form-data' } : {};
  const { data } = await fetcher.post(`/ab-reservations/${id}/ab-imgs`, file, { headers });

  return data.data;
};
