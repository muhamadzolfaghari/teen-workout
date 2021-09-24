import * as React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import classes from './Navigation.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import useOnlyMediumScreen from '../../../hooks/useOnlyMediumScreen';
import clsx from 'clsx';

export default function Navigation() {
  const onlyMediumScreen = useOnlyMediumScreen();
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      elevation={5}
      className={clsx(classes.root, onlyMediumScreen && classes.md)}
    >
      <BottomNavigation
        className={classes.navigation}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
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
