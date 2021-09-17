import classes from './ArticleFooter.module.scss';
import { PropsWithChildren } from 'react';

const ArticleFooter = ({ children }: PropsWithChildren<any>) => (
  <footer className={classes.root}>{children}</footer>
);

export default ArticleFooter;
