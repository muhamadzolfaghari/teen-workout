import { ValuesType } from '../../../types/ValuesType';
import IOAuth2 from '../../../interface/IOAuth2';

const getLocationOauth2 = () => {
  const fragmentString = window.location.hash.substring(1);

  // Parse query string to see if page request is coming from OAuth 2.0 server.
  const params = {} as IOAuth2;
  const PARAMS_REGEX = /([^&=]+)=([^&]*)/g;
  let results;

  while ((results = PARAMS_REGEX.exec(fragmentString))) {
    const key = decodeURIComponent(results[1]) as keyof typeof params;
    params[key] = decodeURIComponent(results[2]) as ValuesType<typeof params>;
  }

  if (Object.keys(params).length > 0) {
    if (params.state === 'try_sample_request') {
      return params;
    }
  }
};

export default getLocationOauth2;
