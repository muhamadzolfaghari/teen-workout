import { useLazyAuthGoogleQuery } from '../../features/apiSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import getLocationOauth2 from '../../lib/utils/oauth2/getLocationOauth2';
import {ACCOUNT_STORAGE_KEY, OAUTH2_STORAGE_KEY} from '../../lib/account.const';
import oauth2SignIn from '../../lib/utils/oauth2/oauth2SignIn';
import { accountChanged, oauth2Changed } from '../../features/authSlice';

const useWelcoming = () => {
  const dispatch = useAppDispatch();
  const [trigger, result] = useLazyAuthGoogleQuery();

  useEffect(() => {
    const oauth2 = getLocationOauth2();

    if (!oauth2) {
      return;
    }

    window.location.hash = '';
    trigger(oauth2.access_token);
    dispatch(oauth2Changed(oauth2));
    localStorage.setItem(OAUTH2_STORAGE_KEY, JSON.stringify(oauth2));
  }, [dispatch, trigger]);

  useEffect(() => {
    if (result.data) {
      dispatch(accountChanged(result.data));
      localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(result.data));
    }
  }, [result, dispatch]);

  const handleLogin = () => {
    oauth2SignIn();
  };

  return {
    handleLogin,
  };
};

export default useWelcoming;
