import { useSelector } from 'react-redux';
import {
  authSelector,
  useAppDispatch,
  welcomeWizardSelector,
} from '../../app/hooks';
import Steps from './Steps/Steps';
import { useEffect } from 'react';
import { appModeChanged } from '../../features/appSlice';
import { AppMode } from '../../lib/app.const';
import { stepIncremented } from '../../features/welcomeWizardSlice';

const WelcomeWizard = () => {
  const dispatch = useAppDispatch();
  const { account } = useSelector(authSelector);
  const { activeStep } = useSelector(welcomeWizardSelector);

  useEffect(() => {
    if (account) {
      if (account.is_completed) {
        dispatch(appModeChanged(AppMode.DASHBOARD));
      } else {
        dispatch(stepIncremented());
        dispatch(appModeChanged(AppMode.WELCOME_WIZARD));
      }
    }
  }, [account, dispatch]);

  return <Steps step={activeStep} />;
};

export default WelcomeWizard;
