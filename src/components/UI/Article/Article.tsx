import { FC } from 'react';
import classes from './Article.module.scss';

const Article: FC = ({ children }) => (
  <article className={classes.root}>{children}</article>
);

export default Article;
