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
import ArticleHeaderImage from '../../UI/Article/ArticleHeader/ArticleHeaderImage';
import standingGirlsImage from '../../../images/welcome-wizard/standing-girls.png';
import standingBoysImage from '../../../images/welcome-wizard/standing-boys.png';
import BoldText from '../../UI/BoldText';

const SetAgeRange = () => {
  const dispatch = useAppDispatch();
  const { gender } = useSelector(welcomeWizardSelector);

  const handleClick = (ageRange: AgeRangeType) => () => {
    dispatch(stepIncremented());
    dispatch(ageRangeChanged(ageRange));
  };

  return (
    <Article>
      <ArticleHeader>
        {gender === 'female' ? (
          <ArticleHeaderImage
            src={standingGirlsImage}
            alt={'The girls are standing'}
          />
        ) : (
          <ArticleHeaderImage
            src={standingBoysImage}
            alt={'The boys are standing'}
          />
        )}
      </ArticleHeader>
      <ArticleSection>
        <Description>
          Which one is best for describing your <BoldText>age range</BoldText>?
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
