import MuiCard, { CardProps } from '@mui/material/Card';

const Card = (props: CardProps) => (
  <MuiCard
    {...props}
    variant={'outlined'}
    sx={{ borderRadius: '20px', ...props.sx }}
  />
);

export default Card;