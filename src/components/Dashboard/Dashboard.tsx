import Navigation from '../UI/Dashboard/Navigation/Navigation';
import * as React from 'react';
import { useEffect } from 'react';
import Home from './Home/Home';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import classes from './Dashboard.module.scss';
import useOnlyMediumScreen from '../../hooks/useOnlyMediumScreen';
import { useSelector } from 'react-redux';
import {
  authSelector,
  dashboardSelector,
  useAppDispatch,
} from '../../app/hooks';
import { DashboardMode } from '../../lib/dashboard/dashboard.const';
import Workout from './Workout/Workout';
import { useGetProfileQuery } from '../../features/apiSlice';
import useLogout from '../../hooks/useLogout';
import { profileChanged } from '../../features/authSlice';
import Diet from './Diet/Diet';
import Settings from './Settings/Settings';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const onlyMediumScreen = useOnlyMediumScreen();
  const { activeMode } = useSelector(dashboardSelector);
  const { account, oauth2 } = useSelector(authSelector);
  const { data, error } = useGetProfileQuery({
    account_id: account?.id!,
    access_token: oauth2?.access_token!,
  });
  const { logout } = useLogout();

  useEffect(() => {
    if (error) {
      logout();
      return;
    }

    dispatch(profileChanged(data));
  }, [data, dispatch, error, logout]);

  const ActiveContent = () => {
    switch (activeMode) {
      case DashboardMode.HOME:
        return <Home />;
      case DashboardMode.WORKOUT:
        return <Workout />;
      case DashboardMode.DIET:
        return <Diet />;
      case DashboardMode.SETTINGS:
        return <Settings />;
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
          // onlySmallScreen && classes.sm
        )}
      >
        <ActiveContent />
      </Container>
    </>
  );
};

export default Dashboard;
