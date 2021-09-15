import Button from '@mui/material/Button';
import ArticleSection from '../UI/Article/ArticleSection';
import ArticleFooter from '../UI/Article/ArticleFooter';
import Description from './Description';
import ArticleHeader from '../UI/Article/ArticleHeader';

const SetAgeRange = () => (
  <>
    <ArticleHeader />
    <ArticleSection>
      <Description>
        Which one is best for describing your <mark>age range</mark>?
      </Description>
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
