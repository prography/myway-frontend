import { createEntity } from 'utils/redux';
import * as authApi from 'api/auth';

export const JOIN = 'JOIN';

export const joinEntity = createEntity(
  JOIN,
  authApi.joinAdvertiser,
);
export const join = (params: authApi.JoinParams) => ({
  type: JOIN,
  params,
});

export type Join= ReturnType<typeof join>;
