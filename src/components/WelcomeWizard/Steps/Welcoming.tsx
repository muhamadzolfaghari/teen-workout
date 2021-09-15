import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../app/hooks';
import { activeStepChanged } from '../../../features/welcomeWizardSlice';
import { WelcomeWizardStep } from '../../../lib/welcomeWizard.const';
import ArticleHeader from '../../UI/Article/ArticleHeader';
import ArticleSection from '../../UI/Article/ArticleSection';
import Description from '../Description';
import ArticleFooter from '../../UI/Article/ArticleFooter';
import Button from './Button';

const Welcoming = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(activeStepChanged(WelcomeWizardStep.SET_GENDER));
  };

  return (
    <>
      <ArticleHeader />
      <ArticleSection>
        <Typography variant={'h2'}>Teen Workout</Typography>
        <Description>
          you will have everything you need to increase your height, for free!
        </Description>
      </ArticleSection>
      <ArticleFooter>
        <div />
        <Button onClick={handleButtonClick}>{"Let's go"}</Button>
      </ArticleFooter>
    </>
  );
};

export default Welcoming;
