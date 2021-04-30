import fetcher from 'utils/fetcher';
import { User } from 'models/user';
import { Order } from 'models/order';

export interface JoinParams {
  name: string;
  email: string;
  company: string;
  pwd: string;
}

export const joinAdvertiser = async (params: JoinParams) => {
  const { data } = await fetcher.post('/abvertisers', params);

  return data;
};

export interface LoginParams {
  email: string;
  pwd: string;
}

export const loginAdvertiser = async (params: LoginParams) => {
  const { data } = await fetcher.post('/abvertisers/login', params);

  return data.data.token;
};

export const getUser = async (token?: string) => {
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await fetcher.get<{ data: User }>('/abvertisers/me', {
    headers,
  });

  return data.data;
};

export const getMyOrderData = async (token?: string) => {
  const headers = token ? { 'x-access-token': token } : {};
  const { data } = await fetcher.get<{ arr: Order[] }>(
    '/abvertisers/me/ab-reservations',
    {
      headers,
    },
  );

  return data.arr;
};
