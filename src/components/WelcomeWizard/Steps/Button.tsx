import MuiButton, { ButtonProps } from '@mui/material/Button';
import classes from './Button.module.scss';

const Button = ({ ...rest }: ButtonProps) => (
  <MuiButton
    {...rest}
    size={'large'}
    color={'primary'}
    variant={'contained'}
    className={classes.root}
  />
);

export default Button;
