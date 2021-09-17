import ArticleSection from '../../UI/Article/ArticleSection';
import ArticleFooter from '../../UI/Article/ArticleFooter/ArticleFooter';
import Description from '../Description';
import ArticleHeader from '../../UI/Article/ArticleHeader/ArticleHeader';
import TextField from '@mui/material/TextField';
import classes from './SetHeightWeight.module.scss';
import Button from './Button';
import useSetHeightWeight from '../../../hooks/welcomeWizard/useSetHeightWeight';
import Article from '../../UI/Article/Article';

const SetHeightWeight = () => {
  const { form } = useSetHeightWeight();

  return (
    <form onSubmit={form.handleSubmit} className={classes.root}>
      <Article>
        <ArticleHeader />
        <ArticleSection>
          <Description gutterBottom>
            What is your <mark>height</mark> and <mark>weight</mark>?
          </Description>
          <div className={classes.group}>
            <TextField
              margin={'normal'}
              name={'height'}
              label={'Height'}
              onBlur={form.handleBlur}
              value={form.values.height}
              onChange={form.handleChange}
              error={form.touched.height && !!form.errors.height}
              helperText={form.touched.height && form.errors.height}
            />
            <TextField
              margin={'normal'}
              name={'weight'}
              label={'Weight'}
              onBlur={form.handleBlur}
              value={form.values.weight}
              onChange={form.handleChange}
              error={form.touched.weight && !!form.errors.weight}
              helperText={form.touched.weight && form.errors.weight}
            />
          </div>
        </ArticleSection>
        <ArticleFooter>
          <div />
          <Button type={'submit'} disabled={!form.dirty || !form.isValid}>
            Finish
          </Button>
        </ArticleFooter>
      </Article>
    </form>
  );
};

export default SetHeightWeight;
