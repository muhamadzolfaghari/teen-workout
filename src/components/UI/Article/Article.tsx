import classes from './Article.module.scss';
import { PropsWithChildren } from 'react';
import Paper from '@mui/material/Paper';
import useOnlySmallScreen from '../../../hooks/useOnlySmallScreen';
import clsx from 'clsx';

const Article = ({ children }: PropsWithChildren<any>) => {
  const onlySmallScreen = useOnlySmallScreen();

  return (
    <Paper
      elevation={5}
      component={'article'}
      className={clsx(classes.root, onlySmallScreen && classes.sm)}
    >
      {children}
    </Paper>
  );
};

export default Article;
