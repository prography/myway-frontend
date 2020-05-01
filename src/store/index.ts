import { combineReducers } from 'redux';
import AuthReducer, { PartnerState } from 'store/partner';

export type RootState = {
  partner: PartnerState;
};

export default combineReducers({
  partner: AuthReducer,
});
