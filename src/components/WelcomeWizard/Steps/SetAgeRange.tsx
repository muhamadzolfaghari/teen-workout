import ArticleSection from '../../UI/Article/ArticleSection';
import ArticleFooter from '../../UI/Article/ArticleFooter';
import Description from '../Description';
import ArticleHeader from '../../UI/Article/ArticleHeader';
import { useSelector } from 'react-redux';
import { welcomeWizardSelector } from '../../../app/hooks';
import Button from './Button';

const SetAgeRange = () => {
  const { gender } = useSelector(welcomeWizardSelector);

  return (
    <>
      <ArticleHeader />
      <ArticleSection>
        <Description>
          Which one is best for describing your <mark>age range</mark>?
        </Description>
      </ArticleSection>
      <ArticleFooter>
        <Button size={'large'} variant={'contained'}>
          {gender === 'man' ? '👦' : '👧'} Before 12
        </Button>
        <Button size={'large'} variant={'contained'}>
          {gender === 'man' ? '👨' : '🧑'} After 12
        </Button>
      </ArticleFooter>
    </>
  );
};

export default SetAgeRange;
