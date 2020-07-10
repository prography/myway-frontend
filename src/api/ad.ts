import fetcher from 'utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface UploadAdParams {

}

export const uploadAd = async (params: UploadAdParams) => {
  const token = getAuthToken()?.toString();
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await fetcher.post('/upload-ad', params, {
    headers,
  });

  return data.data;
};
