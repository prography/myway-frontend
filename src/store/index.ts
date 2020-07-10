import { combineReducers } from 'redux';
import PartnerReducer, { PartnerState } from 'store/partner';
import AuthReducer, { AuthState } from 'store/auth';
import PayReducer, { PayState } from 'store/pay';
import AdReducer, { AdState } from 'store/ad';

export type RootState = {
  partner: PartnerState;
  auth: AuthState;
  pay: PayState;
  ad: AdState;
};

export default combineReducers({
  partner: PartnerReducer,
  auth: AuthReducer,
  pay: PayReducer,
  ad: AdReducer,
});
