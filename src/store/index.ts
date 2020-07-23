import { combineReducers } from 'redux';
import PartnerReducer, { PartnerState } from 'store/partner';
import AuthReducer, { AuthState } from 'store/auth';
import PayReducer, { PayState } from 'store/pay';

export type RootState = {
  partner: PartnerState;
  auth: AuthState;
  pay: PayState;
};

export default combineReducers({
  partner: PartnerReducer,
  auth: AuthReducer,
  pay: PayReducer,
});
