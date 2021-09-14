import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Article from '../UI/Article/Article';
import { useAppDispatch } from '../../app/hooks';
import { activeStepChanged } from '../../features/welcomeWizardSlice';
import { WelcomeWizardStep } from '../../lib/welcomeWizard.const';

const Welcoming = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(activeStepChanged(WelcomeWizardStep.SET_AGE_RANGE));
  };

  return (
    <Article>
      <header>
        <Typography variant={'h1'}>Teen Workout</Typography>
      </header>
      <section>
        <Typography variant={'h4'}>
          We glad to see you to knowing about how increasing your height Just
          answered a few question
        </Typography>
      </section>
      <footer>
        <Button
          size={'large'}
          color={'primary'}
          variant={'contained'}
          onClick={handleButtonClick}
        >
          {"Let's go"}
        </Button>
      </footer>
    </Article>
  );
};

export default Welcoming;
