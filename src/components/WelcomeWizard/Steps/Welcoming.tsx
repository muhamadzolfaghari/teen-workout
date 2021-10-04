import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import ArticleHeader from '../../UI/Article/ArticleHeader/ArticleHeader';
import ArticleSection from '../../UI/Article/ArticleSection';
import Description from '../Description';
import Button from './Button';
import Article from '../../UI/Article/Article';
import image from '../../../images/welcome-wizard/climbing.png';
import ArticleHeaderImage
  from '../../UI/Article/ArticleHeader/ArticleHeaderImage';
import ArticleFooter from '../../UI/Article/ArticleFooter/ArticleFooter';
import classes from './Welcoming.module.scss';
import useWelcoming from '../../../hooks/welcomeWizard/useWelcoming';
import { CircularProgress } from '@mui/material';

const Welcoming = () => {
  const { handleLogin, isFetching } = useWelcoming();

  return (
    <Article>
      <ArticleHeader>
        <ArticleHeaderImage src={image} alt="The man is doing climbing" />
      </ArticleHeader>
      <ArticleSection>
        <Typography variant={'h3'} gutterBottom>
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
          onClick={handleLogin}
          disabled={isFetching}
          className={classes.button}
        >
          {!isFetching ? <GoogleIcon /> : <CircularProgress size={25} />}
          <Typography component={'span'}>Continue With Google</Typography>
        </Button>
      </ArticleFooter>
    </Article>
  );
};

export default Welcoming;
