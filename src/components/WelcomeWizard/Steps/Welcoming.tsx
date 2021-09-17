import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../app/hooks';
import ArticleHeader from '../../UI/Article/ArticleHeader/ArticleHeader';
import ArticleSection from '../../UI/Article/ArticleSection';
import Description from '../Description';
import Button from './Button';
import { stepIncremented } from '../../../features/welcomeWizardSlice';
import Article from '../../UI/Article/Article';
import image from '../../../images/climbing.png';
import ArticleHeaderImage from '../../UI/Article/ArticleHeader/ArticleHeaderImage';
import ArticleFooter from '../../UI/Article/ArticleFooter/ArticleFooter';
import classes from './Welcoming.module.scss';

const Welcoming = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(stepIncremented());
  };

  return (
    <Article>
      <ArticleHeader>
        <ArticleHeaderImage src={image} alt="The man is doing climbing" />
      </ArticleHeader>
      <ArticleSection>
        <Typography variant={'h2'} gutterBottom>
          Teen Workout
        </Typography>
        <Description gutterBottom>
          you will have everything you need to increase your height, for free!
        </Description>
      </ArticleSection>
      <ArticleFooter type={'normal'}>
        <Button
          fullWidth
          variant={'outlined'}
          className={classes.button}
          onClick={handleButtonClick}
        >
          <GoogleIcon />
          <Typography component={'span'}>Continue With Google</Typography>
        </Button>
      </ArticleFooter>
    </Article>
  );
};

export default Welcoming;
