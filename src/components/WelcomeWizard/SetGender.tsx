import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArticleSection from '../UI/Article/ArticleSection';
import ArticleFooter from '../UI/Article/ArticleFooter';

const SetAgeRange = () => (
  <>
    <ArticleSection>
      <Typography variant={'body1'}>
        Which one is best for describing your{' '}
        <Typography component={'span'} color={'primary'} fontSize={'inherit'}>
          age range
        </Typography>
        ?{' '}
      </Typography>
    </ArticleSection>
    <ArticleFooter>
      <Button size={'large'} variant={'contained'}>
        👦 Before 12
      </Button>
      <Button size={'large'} variant={'contained'}>
        👨 After 12
      </Button>
    </ArticleFooter>
  </>
);

export default SetAgeRange;
