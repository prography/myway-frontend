import { createEntity } from 'utils/redux';
import * as authApi from 'api/auth';

export const JOIN = 'JOIN';
export const LOGIN = 'LOGIN';
export const ME = 'ME';
export const MYORDER = 'MYORDER';

export const joinEntity = createEntity(JOIN, authApi.joinAdvertiser);
export const join = (params: authApi.JoinParams) => ({
  type: JOIN,
  params,
});

export const loginEntity = createEntity(LOGIN, authApi.loginAdvertiser);
export const login = (params: authApi.LoginParams) => ({
  type: LOGIN,
  params,
});

export const meEntity = createEntity(ME, authApi.getUser);
export const me = (token?: string) => ({ type: ME, token });

export const myOrderEntity = createEntity(MYORDER, authApi.getMyOrderData);
export const myOrder = (token?: string) => ({ type: MYORDER, token });

export type Join = ReturnType<typeof join>;
export type Login = ReturnType<typeof login>;
export type Me = ReturnType<typeof me>;
export type MyOrder = ReturnType<typeof myOrder>;
