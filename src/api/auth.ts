import axios from 'axios';
import { User } from 'models/user';
import { setAuthToken } from 'utils/auth';

export interface JoinParams {
  name: string;
  email: string;
  company: string;
  pwd: string;
};

export const joinAdvertiser = async (params: JoinParams) => {
  const { data } = await axios.post('https://api.copl.kr/advertisers',  params );
  
  return data;
};

export interface LoginParams {
  email: string;
  pwd: string;
};
  
export const loginAdvertiser = async (params: LoginParams) => {
  const { data } = await axios.post('https://api.copl.kr/advertisers/login',  params );
  setAuthToken(data.data.token);

  return data;
};

export const getUser = async (token?: string) => {
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await axios.get<{ data: User }>('https://api.copl.kr/advertisers/me', { headers });
  
  return data.data;
};