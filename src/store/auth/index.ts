import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { combineReducers } from 'redux';
import { User } from 'models/user';
import { Order } from 'models/order';
import { createReducer } from 'utils/redux';
import { joinEntity } from './action';
import { setAuthToken } from 'utils/auth';

export type AuthState = {
  join: {
    status: Status;
  };
  login: {
    status: Status;
  };
  me: {
    info: User;
    isLoggedIn: boolean;
  };
  myOrder: {
    list: Order[];
  };
};

const initialState: AuthState = {
  join: {
    status: 'INIT',
  },
  login: {
    status: 'INIT',
  },
  me: {
    info: {
      id: 0,
      name: '',
      email: '',
      company: '',
    },
    isLoggedIn: false,
  },
  myOrder: {
    list: [],
  },
};

const joinReducer = createReducer(joinEntity, initialState.join);

const loginReducer = handleActions(
  {
    ['LOGIN_REQUEST']: (state, action) => {
      return produce(state, (draft) => {
        draft.status = 'REQUEST';
      });
    },
    ['LOGIN_SUCCESS']: (state, action) => {
      return produce(state, (draft) => {
        draft.status = 'SUCCESS';
        setAuthToken(action.payload);
      });
    },
    ['LOGIN_FAILURE']: (state, action) => {
      return produce(state, (draft) => {
        draft.status = 'FAILURE';
      });
    },
  },
  initialState.login,
);

const meReducer = handleActions(
  {
    ['ME_REQUEST']: (state, action) => {
      return produce(state, (draft) => {});
    },
    ['ME_SUCCESS']: (state, action) => {
      return produce(state, (draft) => {
        draft.info = (action.payload as unknown) as User;
        draft.isLoggedIn = true;
      });
    },
    ['ME_FAILURE']: (state, action) => {
      return produce(state, (draft) => {
        draft.info = initialState.me.info;
        draft.isLoggedIn = false;
      });
    },
  },
  initialState.me,
);

const myOrderReducer = handleActions(
  {
    ['MYORDER_REQUEST']: (state, action) => {
      return produce(state, (draft) => {});
    },
    ['MYORDER_SUCCESS']: (state, action) => {
      return produce(state, (draft) => {
        console.log(action.payload);
        draft.list = (action.payload as unknown) as Order[];
      });
    },
    ['MYORDER_FAILURE']: (state, action) => {
      return produce(state, (draft) => {
        draft.list = state.list;
      });
    },
  },
  initialState.myOrder,
);

export default combineReducers({
  join: joinReducer,
  login: loginReducer,
  me: meReducer,
  myOrder: myOrderReducer,
});
