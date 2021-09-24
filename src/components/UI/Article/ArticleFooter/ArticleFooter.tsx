import classes from './ArticleFooter.module.scss';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface IProps {
  type?: 'grid' | 'normal';
}

const ArticleFooter = ({ children, type }: PropsWithChildren<IProps>) => (
  <footer className={clsx(classes.root, classes[type ?? 'grid'])}>
    {children}
  </footer>
);

export default ArticleFooter;
