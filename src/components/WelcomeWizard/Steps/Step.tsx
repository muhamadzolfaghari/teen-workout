import { WelcomeWizardStep } from '../../../lib/welcomeWizard.const';
import Welcoming from './Welcoming';
import { Values } from '../../../types/Values';
import SetAgeRange from './SetAgeRange';
import SetGender from './SetGender';
import SetHeightWeight from './SetHeightWeight';

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
    case WelcomeWizardStep.SET_HEIGHT_WEIGHT:
      return <SetHeightWeight />;
    default:
      return null;
  }
};

export default Step;
