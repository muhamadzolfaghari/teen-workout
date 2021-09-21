import { useSelector } from 'react-redux';
import { appSelector } from '../../app/hooks';
import WelcomeWizard from '../WelcomeWizard/WelcomeWizard';
import { AppMode } from '../../lib/app.const';
import Dashboard from '../Dashboard/Dashboard';

const Main = () => {
  const { appMode } = useSelector(appSelector);

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
