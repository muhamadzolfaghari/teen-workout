import Navigation from '../UI/Dashboard/Navigation/Navigation';
import * as React from 'react';
import Home from './Home/Home';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import classes from './Dashboard.module.scss';
import useOnlyMediumScreen from '../../hooks/useOnlyMediumScreen';
import useOnlySmallScreen from '../../hooks/useOnlySmallScreen';
import { useSelector } from 'react-redux';
import { dashboardSelector } from '../../app/hooks';
import { DashboardMode } from '../../lib/dashboard.const';
import Workout from './Workout/Workout';

const Dashboard = () => {
  const onlySmallScreen = useOnlySmallScreen();
  const onlyMediumScreen = useOnlyMediumScreen();
  const { activeMode } = useSelector(dashboardSelector);

  const ActiveContent = () => {
    switch (activeMode) {
      case DashboardMode.HOME:
        return <Home />;
      case DashboardMode.WORKOUT:
        return <Workout />;
      default:
        return null;
    }
  };

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
        <ActiveContent />
      </Container>
    </>
  );
};

export default Dashboard;
