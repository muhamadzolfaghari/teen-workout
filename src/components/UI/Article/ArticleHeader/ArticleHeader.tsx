import classes from './ArticleHeader.module.scss';
import { PropsWithChildren } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppDispatch, welcomeWizardSelector } from '../../../../app/hooks';
import { stepDecremented } from '../../../../features/welcomeWizardSlice';
import { useSelector } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import useOnlySmallScreen from '../../../../hooks/useOnlySmallScreen';

const ArticleHeader = ({ children }: PropsWithChildren<any>) => {
  const dispatch = useAppDispatch();
  const onlySmallScreen = useOnlySmallScreen();
  const { activeStep } = useSelector(welcomeWizardSelector);

  const handleClick = () => {
    dispatch(stepDecremented());
  };

  return (
    <header className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        {activeStep > 0 ? (
          <IconButton onClick={handleClick}>
            <ArrowBackIcon />
          </IconButton>
        ) : (
          <div />
        )}
        {onlySmallScreen && (
          <IconButton>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      {children}
    </header>
  );
};

export default ArticleHeader;
