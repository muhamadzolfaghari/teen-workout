import classes from './ArticleFooter.module.scss';
import { PropsWithChildren } from 'react';
import getClassName from '../../../../lib/utilites/getClassName';

interface IProps {
  type?: 'grid' | 'normal';
}

const ArticleFooter = ({ children, type }: PropsWithChildren<IProps>) => (
  <footer className={getClassName(classes.root, classes[type ?? 'grid'])}>
    {children}
  </footer>
);

export default ArticleFooter;
