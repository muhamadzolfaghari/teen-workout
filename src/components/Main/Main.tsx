import { useSelector } from 'react-redux';
import { appSelector, authSelector, useAppDispatch } from '../../app/hooks';
import WelcomeWizard from '../WelcomeWizard/WelcomeWizard';
import { AppMode } from '../../lib/app.const';
import Dashboard from '../Dashboard/Dashboard';
import { useEffect } from 'react';
import { useAuthCsrfQuery } from '../../features/apiSlice';
import { csrfChanged } from '../../features/authSlice';
import { appModeChanged } from '../../features/appSlice';

const Main = () => {
  const dispatch = useAppDispatch();
  const { appMode } = useSelector(appSelector);
  const { data } = useAuthCsrfQuery(undefined);
  const { account } = useSelector(authSelector);

  useEffect(() => {
    if (data) {
      dispatch(csrfChanged(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (account) {
      if (account.is_completed) {
        dispatch(appModeChanged(AppMode.DASHBOARD));
      } else {
        dispatch(appModeChanged(AppMode.WELCOME_WIZARD));
        // dispatch(stepChanged(WelcomeWizardStep.WELCOMING));
      }
    }
  }, [account, dispatch]);

  switch (appMode) {
    case AppMode.WELCOME_WIZARD:
      return <WelcomeWizard />;
    case AppMode.DASHBOARD:
      return <Dashboard />;
    default:
      return null;
  }
};

export default Main;
