import { useLazyAuthGoogleQuery } from '../../features/apiSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import oauth2SignIn from '../../lib/utils/oauth2/oauth2SignIn';
import getLocationOauth2 from '../../lib/utils/oauth2/getLocationOauth2';
import { oauth2Changed } from '../../features/appSlice';
import { OAUTH2_STORAGE_KEY } from '../../lib/oauth2.const';
import getStorageOauth2 from '../../lib/utils/oauth2/getStorageOauth2';

const useWelcoming = () => {
  const dispatch = useAppDispatch();
  const [trigger, data] = useLazyAuthGoogleQuery();

  useEffect(() => {
    console.log(getStorageOauth2());
    const oauth2 = getLocationOauth2();

    if (!oauth2) {
      return;
    }

    trigger(oauth2.access_token);

    dispatch(oauth2Changed(oauth2));
    localStorage.setItem(OAUTH2_STORAGE_KEY, JSON.stringify(oauth2));
  }, [dispatch, trigger]);

  useEffect(() => {
    console.log(data);
  }, [data])

  const handleClick = () => {
    oauth2SignIn();
    // dispatch(stepIncremented());
  };

  return {
    handleClick,
  };
};

export default useWelcoming;
