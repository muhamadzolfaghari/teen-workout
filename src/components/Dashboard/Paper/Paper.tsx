import MuiPaper, { PaperProps } from '@mui/material/Paper';
import classes from './Paper.module.scss';
import useOnlySmallScreen from '../../../hooks/useOnlySmallScreen';
import clsx from 'clsx';

const Paper = (props: PaperProps) => {
  const onlySmallScreen = useOnlySmallScreen();

  return (
    <MuiPaper
      {...props}
      elevation={5}
      className={clsx(classes.root, onlySmallScreen && classes.md)}
    />
  );
};

export default Paper;
