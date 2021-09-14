import classes from './ArticleFooter.module.scss';
import { PropsWithChildren } from 'react';

const ArticleFooter = ({ children }: PropsWithChildren<any>) => (
  <footer>
    <div className={classes.wrapper}>{children}</div>
  </footer>
);

export default ArticleFooter;
