import fetcher from 'utils/fetcher';
import { User } from 'models/user';

export interface JoinParams {
  name: string;
  email: string;
  company: string;
  pwd: string;
};

export const joinAdvertiser = async (params: JoinParams) => {
  const { data } = await fetcher.post('/advertisers',  params );
  
  return data;
};

export interface LoginParams {
  email: string;
  pwd: string;
};
  
export const loginAdvertiser = async (params: LoginParams) => {
  const { data } = await fetcher.post('/advertisers/login',  params );

  return data.data.token;
};

export const getUser = async (token?: string) => {
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await fetcher.get<{ data: User }>('/advertisers/me', { headers });
  
  return data.data;
};