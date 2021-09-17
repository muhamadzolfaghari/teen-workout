import classes from './Article.module.scss';
import { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import getClassName from '../../../lib/utilites/getClassName';
import Paper from '@mui/material/Paper';

const Article = ({ children }: PropsWithChildren<any>) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      elevation={5}
      component={'article'}
      className={getClassName(classes.root, isSmallScreen && classes.sm)}
    >
      {children}
    </Paper>
  );
};

export default Article;
