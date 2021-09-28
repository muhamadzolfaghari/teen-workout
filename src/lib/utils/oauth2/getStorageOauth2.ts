import { OAUTH2_STORAGE_KEY } from '../../oauth2.const';
import IOAuth2 from '../../../interface/IOAuth2';

const KEYS: (keyof IOAuth2)[] = [
  'state',
  'access_token',
  'token_type',
  'expires_in',
  'scope',
];

const getStorageOauth2 = (): IOAuth2 | undefined => {
  const rawData = localStorage.getItem(OAUTH2_STORAGE_KEY);

  if (!rawData) {
    return;
  }

  try {
    const json = JSON.parse(rawData);

    if (!(json && typeof json === 'object' && Object.keys(json).length)) {
      return;
    }

    for (const key of KEYS) {
      if (!json[key]) {
        return;
      }
    }

    return json;
  } catch (e) {
    // Sends logs to server.
  }
};

export default getStorageOauth2;
