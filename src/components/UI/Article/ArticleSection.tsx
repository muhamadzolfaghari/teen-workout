import { PropsWithChildren } from 'react';
import classes from './ArticleSection.module.scss';

const ArticleSection = ({ children }: PropsWithChildren<any>) => (
  <section className={classes.root}>{children}</section>
);

export default ArticleSection;
