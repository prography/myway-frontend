import { combineReducers } from 'redux';
import PartnerReducer, { PartnerState } from 'store/partner';
import AuthReducer, { AuthState } from 'store/auth';

export type RootState = {
  partner: PartnerState;
  auth: AuthState;
};

export default combineReducers({
  partner: PartnerReducer,
  auth: AuthReducer,
});
