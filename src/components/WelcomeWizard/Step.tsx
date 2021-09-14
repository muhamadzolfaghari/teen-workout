import { WelcomeWizardStep } from '../../lib/welcomeWizard.const';
import Welcoming from './Welcoming';
import { Values } from '../../types/Values';

interface IProps {
  step: Values<typeof WelcomeWizardStep>;
}

const Step = ({ step }: IProps) => {
  switch (step) {
    case WelcomeWizardStep.WELCOMING:
      return <Welcoming />;
    default:
      return <></>;
  }
};

export default Step;
