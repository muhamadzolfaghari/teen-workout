import ArticleSection from '../../UI/Article/ArticleSection';
import ArticleFooter from '../../UI/Article/ArticleFooter';
import Description from '../Description';
import {
  genderChanged,
  stepIncremented,
} from '../../../features/welcomeWizardSlice';
import { useAppDispatch } from '../../../app/hooks';
import { GenderType } from '../../../types/GenderType';
import ArticleHeader from '../../UI/Article/ArticleHeader';
import Button from './Button';
import Article from '../../UI/Article/Article';

const SetGender = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (gender: GenderType) => () => {
    dispatch(stepIncremented());
    dispatch(genderChanged(gender));
  };

  return (
    <Article>
      <ArticleHeader />
      <ArticleSection>
        <Description>
          What is your <mark>gender</mark>?
        </Description>
      </ArticleSection>
      <ArticleFooter>
        <Button onClick={handleButtonClick('male')}>🧑 Male</Button>
        <Button onClick={handleButtonClick('female')}>👧 Female</Button>
      </ArticleFooter>
    </Article>
  );
};

export default SetGender;
