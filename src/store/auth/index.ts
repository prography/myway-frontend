import { produce } from 'immer';
import { combineReducers } from 'redux';
import { User } from 'models/user';

export type AuthState = {
  join: {
    joinSuccess: boolean;
    joinFail: boolean;
    status: string;
  },
  login: {
    loginSuccess: boolean;
    loginFail: boolean;
    status: string;
  },
  me: User & {
    isLoggedIn: boolean;
  },
};

const initialState: AuthState = {
  join: {
    joinSuccess: false,
    joinFail: false,
    status: 'INIT',
  },
  login: {
    loginSuccess: false,
    loginFail: false,
    status: 'INIT',
  },
  me: {
    id: 0,
    name: '',
    email: '',
    company: '',
    isLoggedIn: false,
  },
};

const joinReducer = (
  state: AuthState['join'] = initialState.join, 
  action: any
): AuthState['join'] => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'JOIN_REQUEST':
        draft.status = 'REQUEST';
        draft.joinSuccess = false;
        draft.joinFail = false;
        return draft;
      case 'JOIN_SUCCESS':
        draft.status = 'SUCCESS';
        draft.joinSuccess = true;
        return draft;
      case 'JOIN_FAILURE':
        draft.status = 'FAILURE';
        draft.joinFail = true;
        return draft;
      default:
        return draft;
    }
  });
};

const loginReducer = (
  state: AuthState['login'] = initialState.login, 
  action: any
): AuthState['login'] => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        draft.status = 'REQUEST';
        draft.loginSuccess = false;
        draft.loginFail = false;
        return draft;
      case 'LOGIN_SUCCESS':
        draft.status = 'SUCCESS';
        draft.loginSuccess = true;
        return draft;
      case 'LOGIN_FAILURE':
        draft.status = 'FAILURE';
        draft.loginFail = true;
        return draft;
      default:
        return draft;
    }
  });
};

const meReducer = (
  state: AuthState['me'] = initialState.me, 
  action: any
): AuthState['me'] => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ME_REQUEST':
        return draft;
      case 'ME_SUCCESS':
        draft = {
          ...action.payload, 
          isLoggedIn: true,
        };
        return draft;
      case 'ME_FAILURE':
        draft = {
          ...initialState.me, 
          isLoggedIn: false,  
        };
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  join: joinReducer,
  login: loginReducer,
  me: meReducer,
});
