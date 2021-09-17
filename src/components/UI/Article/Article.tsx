import classes from './Article.module.scss';
import { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import getClassName from '../../../lib/utilites/getClassName';

const Article = ({ children }: PropsWithChildren<any>) => {
  // const a = useMediaQuery()
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <article className={getClassName(classes.root, isMobileDevice && classes.sm)}>
      {children}
    </article>
  );
};

export default Article;
