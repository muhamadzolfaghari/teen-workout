import { useCallback } from 'react';
import { ACCOUNT_STORAGE_KEY, OAUTH2_STORAGE_KEY } from '../lib/account.const';
import { useAppDispatch } from '../app/hooks';
import { accountChanged, oauth2Changed } from '../features/authSlice';
import { appModeChanged } from '../features/appSlice';
import { AppMode } from '../lib/app.const';
import { WelcomeWizardStep } from '../lib/welcomeWizard.const';
import { stepChanged } from '../features/welcomeWizardSlice';

const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = useCallback(() => {
    dispatch(appModeChanged(AppMode.WELCOME_WIZARD));
    dispatch(stepChanged(WelcomeWizardStep.WELCOMING));
    dispatch(oauth2Changed());
    dispatch(accountChanged());
    localStorage.setItem(OAUTH2_STORAGE_KEY, '');
    localStorage.setItem(ACCOUNT_STORAGE_KEY, '');
  }, [dispatch]);

  return { logout };
};

export default useLogout;
