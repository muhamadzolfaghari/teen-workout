import { WelcomeWizardStep } from '../../../lib/welcomeWizard.const';
import Welcoming from './Welcoming';
import { Values } from '../../../types/Values';
import SetAgeRange from './SetAgeRange';
import SetGender from './SetGender';

interface IProps {
  step: Values<typeof WelcomeWizardStep>;
}

const Step = ({ step }: IProps) => {
  switch (step) {
    case WelcomeWizardStep.WELCOMING:
      return <Welcoming />;
    case WelcomeWizardStep.SET_GENDER:
      return <SetGender />;
    case WelcomeWizardStep.SET_AGE_RANGE:
      return <SetAgeRange />;
    default:
      return null;
  }
};

export default Step;