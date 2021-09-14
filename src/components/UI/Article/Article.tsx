import { FC, HTMLAttributes } from 'react';
import classes from './Article.module.scss';

const Article: FC<HTMLAttributes<any>> = ({ children, className }) => (
  <article className={[classes.root, className].join(' ')}>{children}</article>
);

export default Article;
