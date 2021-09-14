import classes from './ArticleHeader.module.scss';
import { HTMLAttributes, PropsWithChildren } from 'react';
import getClassName from '../../../lib/utilites/getClassName';

const ArticleHeader = ({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<any>>) => (
  <header className={getClassName(classes.root, className)}>{children}</header>
);

export default ArticleHeader;
