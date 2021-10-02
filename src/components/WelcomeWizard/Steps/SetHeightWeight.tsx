import ArticleSection from '../../UI/Article/ArticleSection';
import ArticleFooter from '../../UI/Article/ArticleFooter/ArticleFooter';
import Description from '../Description';
import ArticleHeader from '../../UI/Article/ArticleHeader/ArticleHeader';
import TextField from '@mui/material/TextField';
import classes from './SetHeightWeight.module.scss';
import Button from './Button';
import useSetHeightWeight
  from '../../../hooks/welcomeWizard/useSetHeightWeight';
import Article from '../../UI/Article/Article';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ArticleHeaderImage
  from '../../UI/Article/ArticleHeader/ArticleHeaderImage';
import standingGirlsImage
  from '../../../images/welcome-wizard/standing-girls.png';
import standingBoysImage
  from '../../../images/welcome-wizard/standing-boys.png';
import BoldText from '../../UI/BoldText';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';

const SetHeightWeight = () => {
  const { form, gender, isFetching } = useSetHeightWeight();

  return (
    <form onSubmit={form.handleSubmit} className={classes.root}>
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
          <Description gutterBottom>
            What is your <BoldText>height</BoldText> and{' '}
            <BoldText>weight</BoldText>?
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
          <Button type={'submit'} disabled={!form.isValid || isFetching}
                  className={classes.button}>
            {!isFetching ? <DoneOutlineOutlinedIcon /> :
              <CircularProgress size={25} />}
            <Typography component={'span'}>Finish</Typography>
          </Button>
        </ArticleFooter>
      </Article>
    </form>
  );
};

export default SetHeightWeight;
