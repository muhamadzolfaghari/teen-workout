import MuiButton, { ButtonProps } from '@mui/material/Button';
import classes from './Button.module.scss';
import getClassName from '../../../lib/utilites/getClassName';

const Button = ({ className, ...rest }: ButtonProps) => (
  <MuiButton
    size={'large'}
    variant={'contained'}
    className={getClassName(classes.root, className)}
    {...rest}
  />
);

export default Button;
