import classes from './Article.module.scss';
import { PropsWithChildren } from 'react';

const Article = ({ children }: PropsWithChildren<any>) => (
  <article className={classes.root}>{children}</article>
);

export default Article;
