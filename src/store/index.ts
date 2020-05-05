import { combineReducers } from 'redux';
import partnerReducer, { PartnerState } from 'store/partner';

export type RootState = {
  partner: PartnerState;
};

export default combineReducers({
  partner: partnerReducer,
});
