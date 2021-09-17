import ArticleSection from '../../UI/Article/ArticleSection';
import ArticleFooter from '../../UI/Article/ArticleFooter/ArticleFooter';
import Description from '../Description';
import ArticleHeader from '../../UI/Article/ArticleHeader/ArticleHeader';
import { useSelector } from 'react-redux';
import { useAppDispatch, welcomeWizardSelector } from '../../../app/hooks';
import Button from './Button';
import {
  ageRangeChanged,
  stepIncremented,
} from '../../../features/welcomeWizardSlice';
import { AgeRangeType } from '../../../types/AgeRangeType';
import Article from '../../UI/Article/Article';
import Emoji from '../../UI/Emoji/Emoji';

const SetAgeRange = () => {
  const dispatch = useAppDispatch();
  const { gender } = useSelector(welcomeWizardSelector);

  const handleClick = (ageRange: AgeRangeType) => () => {
    dispatch(stepIncremented());
    dispatch(ageRangeChanged(ageRange));
  };

  return (
    <Article>
      <ArticleHeader />
      <ArticleSection>
        <Description>
          Which one is best for describing your <mark>age range</mark>?
        </Description>
      </ArticleSection>
      <ArticleFooter>
        <Button
          size={'large'}
          variant={'contained'}
          onClick={handleClick('upper 12')}
        >
          <Emoji name={gender!} /> Upper 12
        </Button>
        <Button
          size={'large'}
          variant={'contained'}
          onClick={handleClick('under 12')}
        >
          <Emoji name={gender === 'male' ? 'boy' : 'girl'} /> Under 12
        </Button>
      </ArticleFooter>
    </Article>
  );
};

export default SetAgeRange;
