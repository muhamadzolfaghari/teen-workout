import classes from './ArticleHeader.module.scss';
import { HTMLAttributes, PropsWithChildren } from 'react';
import getClassName from '../../../lib/utilites/getClassName';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppDispatch, welcomeWizardSelector } from '../../../app/hooks';
import { stepDecremented } from '../../../features/welcomeWizardSlice';
import { useSelector } from 'react-redux';

const ArticleHeader = ({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<any>>) => {
  const dispatch = useAppDispatch();
  const { activeStep } = useSelector(welcomeWizardSelector);
  console.log(activeStep);

  const handleClick = () => {
    dispatch(stepDecremented());
  };

  return (
    <header className={getClassName(classes.root, className)}>
      {activeStep > 0 && (
        <IconButton onClick={handleClick}>
          <ArrowBackIcon />
        </IconButton>
      )}
      {children}
    </header>
  );
};

export default ArticleHeader;
