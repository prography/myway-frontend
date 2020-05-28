import { combineReducers } from 'redux';
import { Partner } from 'models/partner';
import { createReducer } from 'utils/redux';
import { getPartnersEntity, applyPartnerEntity } from 'store/partner/action';

export type PartnerState = {
  partners: {
    status: Status;
    items: Partner[];
  },
  applyPartner: {
    status: Status;
  },
};

const initialState: PartnerState = {
  partners: {
    status: 'INIT',
    items: [],
  },
  applyPartner: {
    status: 'INIT',
  },
};

const partnerReducer = createReducer(getPartnersEntity, initialState.partners);
const applyPartnerReducer = createReducer(applyPartnerEntity, initialState.applyPartner);

export default combineReducers({
  partners: partnerReducer,
  applyPartner: applyPartnerReducer,
});
