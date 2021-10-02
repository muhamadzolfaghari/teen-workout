import { useSelector } from 'react-redux';
import { appSelector, useAppDispatch } from '../../app/hooks';
import WelcomeWizard from '../WelcomeWizard/WelcomeWizard';
import { AppMode } from '../../lib/app.const';
import Dashboard from '../Dashboard/Dashboard';
import { useEffect } from 'react';
import { useAuthCsrfQuery } from '../../features/apiSlice';
import { csrfChanged } from '../../features/authSlice';

const Main = () => {
  const { appMode } = useSelector(appSelector);
  const { data } = useAuthCsrfQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(csrfChanged(data));
    }
  }, [data, dispatch]);

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
