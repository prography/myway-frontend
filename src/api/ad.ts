import fetcher from 'utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface UploadAdParams {
  id: number;
  file: any;
  fileType: string;
}

export const uploadAd = async (params: UploadAdParams) => {
  const { id, file, fileType } = params;
  const fileKey = fileType === 'image' ? 'imgs' : 'videos';

  const token = getAuthToken();
  const headers = token ? { 'x-access-token': token, 'content-type': 'multipart/form-data' } : {};

  const { data } = await fetcher.post(`/ab-reservations/${id}/ab-${fileKey}`, file, { headers });

  return data.data;
};
