import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Article from '../UI/Article/Article';

const Welcoming = () => (
  <Article>
    <header>
      <Typography variant={'h1'}>Teen Workout</Typography>
    </header>
    <section>
      <Typography variant={'h4'}>
        We glad to see you to knowing about how increasing your height Just
        answered a few question
      </Typography>
    </section>
    <footer>
      <Button size={'large'} color={'primary'} variant={'contained'}>
        {"Let's go"}
      </Button>
    </footer>
  </Article>
);

export default Welcoming;
