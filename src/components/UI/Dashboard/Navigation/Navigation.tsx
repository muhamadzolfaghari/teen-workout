import * as React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import classes from './Navigation.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import useOnlyMediumScreen from '../../../../hooks/useOnlyMediumScreen';
import clsx from 'clsx';
import { dashboardSelector, useAppDispatch } from '../../../../app/hooks';
import { useSelector } from 'react-redux';
import { Values } from '../../../../types/Values';
import { DashboardMode } from '../../../../lib/dashboard.const';
import { dashboardModeChanged } from '../../../Dashboard/dashboardSlice';

export default function Navigation() {
  const dispatch = useAppDispatch();
  const onlyMediumScreen = useOnlyMediumScreen();
  const { activeMode } = useSelector(dashboardSelector);

  const handleChange = (event: any, mode: Values<typeof DashboardMode>)=> {
    dispatch(dashboardModeChanged(mode));
  };

  return (
    <Paper
      elevation={5}
      className={clsx(classes.root, onlyMediumScreen && classes.md)}
    >
      <BottomNavigation
        className={classes.navigation}
        showLabels
        value={activeMode}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          label="Workout"
          icon={<FitnessCenterOutlinedIcon />}
        />
        <BottomNavigationAction label="Food" icon={<FoodBankOutlinedIcon />} />
        <BottomNavigationAction
          label="Settings"
          icon={<SettingsOutlinedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
