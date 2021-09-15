import Button from '@mui/material/Button';
import ArticleSection from '../UI/Article/ArticleSection';
import ArticleFooter from '../UI/Article/ArticleFooter';
import Description from './Description';
import {
  activeStepChanged,
  genderChanged,
} from '../../features/welcomeWizardSlice';
import { useAppDispatch } from '../../app/hooks';
import { GenderType } from '../../types/GenderType';
import { WelcomeWizardStep } from '../../lib/welcomeWizard.const';
import ArticleHeader from '../UI/Article/ArticleHeader';

const SetGender = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (gender: GenderType) => () => {
    dispatch(genderChanged(gender));
    dispatch(activeStepChanged(WelcomeWizardStep.SET_AGE_RANGE));
  };

  return (
    <>
      <ArticleHeader />
      <ArticleSection>
        <Description>
          What is your <mark>gender</mark>?
        </Description>
      </ArticleSection>
      <ArticleFooter>
        <Button
          size={'large'}
          variant={'contained'}
          onClick={handleButtonClick('man')}
        >
          🧑 Man
        </Button>
        <Button
          size={'large'}
          variant={'contained'}
          onClick={handleButtonClick('woman')}
        >
          👧 Woman
        </Button>
      </ArticleFooter>
    </>
  );
};

export default SetGender;
