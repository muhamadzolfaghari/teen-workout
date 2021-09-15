import { useSelector } from 'react-redux';
import { welcomeWizardSelector } from '../../app/hooks';
import Steps from './Steps/Steps';

const WelcomeWizard = () => {
  const { activeStep } = useSelector(welcomeWizardSelector);

  return <Steps step={activeStep} />;
};

export default WelcomeWizard;
