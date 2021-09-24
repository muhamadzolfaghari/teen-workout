import MuiCard, { CardProps } from '@mui/material/Card';
import classes from './Card.module.scss';

const Card = (props: CardProps) => (
  <MuiCard {...props} variant={'outlined'} className={classes.root} />
);

export default Card;