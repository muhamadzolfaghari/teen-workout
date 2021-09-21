import ArticleSection from '../../UI/Article/ArticleSection';
import ArticleFooter from '../../UI/Article/ArticleFooter/ArticleFooter';
import Description from '../Description';
import {
  genderChanged,
  stepIncremented,
} from '../../../features/welcomeWizardSlice';
import { useAppDispatch } from '../../../app/hooks';
import { GenderType } from '../../../types/GenderType';
import ArticleHeader from '../../UI/Article/ArticleHeader/ArticleHeader';
import Button from './Button';
import Article from '../../UI/Article/Article';
import Emoji from '../../UI/Emoji/Emoji';
import ArticleHeaderImage from '../../UI/Article/ArticleHeader/ArticleHeaderImage';
import image from '../../../images/welcome-wizard/togther-workout.png';

const SetGender = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (gender: GenderType) => () => {
    dispatch(stepIncremented());
    dispatch(genderChanged(gender));
  }

  return (
    <Article>
      <ArticleHeader >
        <ArticleHeaderImage src={image} alt="The man and woman are doing workout" />
      </ArticleHeader>
      <ArticleSection>
        <Description>
          What is your <mark>gender</mark>?
        </Description>
      </ArticleSection>
      <ArticleFooter>
        <Button onClick={handleButtonClick('male')}>
          <Emoji name={'male'} /> Male
        </Button>
        <Button onClick={handleButtonClick('female')}>
          <Emoji name={'female'} /> Female
        </Button>
      </ArticleFooter>
    </Article>
  );
};

export default SetGender;
