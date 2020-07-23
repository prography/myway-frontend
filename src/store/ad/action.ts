import { createEntity } from 'utils/redux';
import * as adApi from 'api/ad';

export const UPLOAD_AD = 'UPLOAD_AD';

export const uploadAdEntity = createEntity(
  UPLOAD_AD,
  adApi.uploadAd,
);

export const uploadAd = (params: adApi.UploadAdParams) => ({
  type: UPLOAD_AD,
  params,
});

export type UploadAd = ReturnType<typeof uploadAd>;
