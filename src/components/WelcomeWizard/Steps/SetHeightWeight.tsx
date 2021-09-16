import ArticleSection from '../../UI/Article/ArticleSection';
import ArticleFooter from '../../UI/Article/ArticleFooter';
import Description from '../Description';
import ArticleHeader from '../../UI/Article/ArticleHeader';
import { useAppDispatch } from '../../../app/hooks';
import TextField from '@mui/material/TextField';
import classes from './SetHeightWeight.module.scss';
import Button from './Button';

const SetHeightWeight = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ArticleHeader />
      <ArticleSection>
        <Description>
          What is your <mark>height</mark> and <mark>weight</mark>?
        </Description>

        <div className={classes.group}>
          <TextField label={'Height'} />
          <TextField label={'Weight'} />
        </div>
      </ArticleSection>
      <ArticleFooter>
        <div />
        <Button fullWidth>Apply</Button>
      </ArticleFooter>
    </>
  );
};

export default SetHeightWeight;
