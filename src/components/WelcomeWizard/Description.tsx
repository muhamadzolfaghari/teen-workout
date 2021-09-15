import Typography, { TypographyProps } from '@mui/material/Typography';
import classes from './Description.module.scss';

const Description = ({ children, ...rest }: TypographyProps) => (
  <Typography className={classes.root} {...rest}>
    {children}
  </Typography>
);

export default Description;
