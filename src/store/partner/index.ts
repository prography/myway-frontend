import { produce } from 'immer';
import { Partner } from 'models/partner';

export type PartnerState = {
  status: string;
  items: Partner[];
};

const initialState: PartnerState = {
  status: 'INIT',
  items: [],
};

const reducer = (state = initialState, action: any): PartnerState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'GET_PARTNERS_SUCCESS':
        draft.status = 'SUCCESS';
        draft.items = action.payload;

        return draft;
    }
  });
};

export default reducer;
