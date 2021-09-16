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

const SetGender = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (gender: GenderType) => () => {
    dispatch(stepIncremented());
    dispatch(genderChanged(gender));
  };

  return (
    <>
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
    </>
  );
};

export default SetGender;
