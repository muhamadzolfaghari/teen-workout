import { useLazyAuthGoogleQuery } from '../../features/apiSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import getOauth2FromLocation
  from '../../lib/utils/oauth2/getOauth2FromLocation';
import {
  ACCOUNT_STORAGE_KEY,
  OAUTH2_STORAGE_KEY,
} from '../../lib/account.const';
import oauth2SignIn from '../../lib/utils/oauth2/oauth2SignIn';
import { accountChanged, oauth2Changed } from '../../features/authSlice';
import { stepChanged } from '../../features/welcomeWizardSlice';
import { WelcomeWizardStep } from '../../lib/welcomeWizard.const';

const useWelcoming = () => {
  const dispatch = useAppDispatch();
  const [trigger, result] = useLazyAuthGoogleQuery();

  useEffect(() => {
    const oauth2 = getOauth2FromLocation();

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
      console.log('next step');
      dispatch(stepChanged(WelcomeWizardStep.SET_GENDER));
    }
  }, [result, dispatch]);

  const handleLogin = () => {
    oauth2SignIn();
  };

  return {
    handleLogin,
    isFetching: result.isFetching,
  };
};

export default useWelcoming;
