import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../app/hooks';
import ArticleHeader from '../../UI/Article/ArticleHeader';
import ArticleSection from '../../UI/Article/ArticleSection';
import Description from '../Description';
import ArticleFooter from '../../UI/Article/ArticleFooter';
import Button from './Button';
import { stepIncremented } from '../../../features/welcomeWizardSlice';

const Welcoming = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(stepIncremented());
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
