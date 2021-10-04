import { useSelector } from 'react-redux';
import { appSelector, authSelector, useAppDispatch } from '../../app/hooks';
import WelcomeWizard from '../WelcomeWizard/WelcomeWizard';
import { AppMode } from '../../lib/app.const';
import Dashboard from '../Dashboard/Dashboard';
import { useEffect } from 'react';
import { appModeChanged } from '../../features/appSlice';

const Main = () => {
  const dispatch = useAppDispatch();
  const { appMode } = useSelector(appSelector);
  const { account } = useSelector(authSelector);

  useEffect(() => {
    if (!account) {
      dispatch(appModeChanged(AppMode.WELCOME_WIZARD));
      return;
    }

    if (account.is_completed) {
      dispatch(appModeChanged(AppMode.DASHBOARD));
    } else {
      dispatch(appModeChanged(AppMode.WELCOME_WIZARD));
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
