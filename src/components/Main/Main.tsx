import { useSelector } from 'react-redux';
import { appSelector, useAppDispatch } from '../../app/hooks';
import WelcomeWizard from '../WelcomeWizard/WelcomeWizard';
import { AppMode } from '../../lib/app.const';
import Dashboard from '../Dashboard/Dashboard';
import { useMetadataQuery } from '../../features/apiSlice';
import { useEffect } from 'react';
import { metadataFetched } from '../../features/appSlice';

const Main = () => {
  const { appMode } = useSelector(appSelector);
  const result = useMetadataQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(metadataFetched(result.data));
    }
  }, [result]);

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
