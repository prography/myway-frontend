import { produce } from 'immer';
import { combineReducers } from 'redux';

export type AuthState = {
  join: {
    isJoined: boolean;
    status: string;
  },
};

const initialState: AuthState = {
  join: {
    isJoined: false,
    status: 'INIT',
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
        return draft;
      case 'JOIN_SUCCESS':
        draft.isJoined = true;
        draft.status = 'SUCCESS';
        return draft;
      case 'JOIN_FAILURE':
        draft.isJoined = false;
        draft.status = 'FAILURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  join: joinReducer,
});
