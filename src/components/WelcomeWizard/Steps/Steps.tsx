import Article from '../../UI/Article/Article';
import Step from './Step';
import { Values } from '../../../types/Values';
import { WelcomeWizardStep } from '../../../lib/welcomeWizard.const';

interface IProps {
  step: Values<typeof WelcomeWizardStep>;
}

const Steps = ({ step }: IProps) => (
  <Article>
    <Step step={step} />
  </Article>
);

export default Steps;
