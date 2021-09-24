import MuiButton, { ButtonProps } from '@mui/material/Button';
import classes from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ className, ...rest }: ButtonProps) => (
  <MuiButton
    size={'large'}
    variant={'contained'}
    className={clsx(classes.root, className)}
    {...rest}
  />
)

export default Button;
