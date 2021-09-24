import Navigation from './Navigation/Navigation';
import * as React from 'react';
import Home from './Home/Home';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import classes from './Dashboard.module.scss';
import useOnlyMediumScreen from '../../hooks/useOnlyMediumScreen';
import useOnlySmallScreen from '../../hooks/useOnlySmallScreen';

const Dashboard = () => {
  const onlySmallScreen = useOnlySmallScreen();
  const onlyMediumScreen = useOnlyMediumScreen();

  return (
    <>
      <Navigation />
      <Container
        className={clsx(
          classes.container,
          onlyMediumScreen && classes.md,
          onlySmallScreen && classes.sm
        )}
      >
        <Home />
      </Container>
    </>
  );
};

export default Dashboard;
