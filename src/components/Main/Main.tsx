import { useSelector } from 'react-redux';
import { appSelector } from '../../app/hooks';
import WelcomeWizard from '../WelcomeWizard/WelcomeWizard';
import { AppMode } from '../../lib/app.const';
import Dashboard from '../Dashboard/Dashboard';
import { useMetadataQuery } from '../../features/apiSlice';
import { useEffect } from 'react';

const Main = () => {
  const { appMode } = useSelector(appSelector);
  const result = useMetadataQuery(undefined)

  console.log(result);

  useEffect(() => {
    if (result.data) {
      console.log(result.data);
    }
  }, [result])



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
