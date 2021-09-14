import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Article from '../UI/Article/Article';
import classes from './SetAgeRange.module.scss';

const SetAgeRange = () => (
  <Article className={classes.root}>
    <section>
      <Typography variant={'h2'}>
        Which one is best for describing your{' '}
        <Typography fontSize={'inherit'} component={'span'} color={'primary'}>
          age range
        </Typography>
        ?{' '}
      </Typography>
    </section>
    <footer>
      <Button size={'large'} variant={'outlined'}>
        👦 Before 12
      </Button>
      <Button size={'large'} variant={'outlined'}>
        👨 After 12
      </Button>
    </footer>
  </Article>
);

export default SetAgeRange;
