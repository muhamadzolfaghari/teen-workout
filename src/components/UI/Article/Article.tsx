import classes from './Article.module.scss';
import { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import getClassName from '../../../lib/utilites/getClassName';
import Paper from '@mui/material/Paper';

const Article = ({ children }: PropsWithChildren<any>) => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper className={getClassName(classes.root, isMobileDevice && classes.sm)}>
      {children}
    </Paper>
  );
};

export default Article;
