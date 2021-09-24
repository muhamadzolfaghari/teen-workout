import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Fab } from '@mui/material';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import * as React from 'react';
import classes from './Summary.module.scss';
import DetailsCard from './DeatilsCard/DetailsCard';
import Paper from '../../../UI/Dashboard/Paper/Paper';
import useOnlySmallScreen from '../../../../hooks/useOnlySmallScreen';
import { useAppDispatch } from '../../../../app/hooks';
import { dashboardModeChanged } from '../../dashboardSlice';
import { DashboardMode } from '../../../../lib/dashboard.const';

const Summary = () => {
  const dispatch = useAppDispatch();
  const onlySmallScreen = useOnlySmallScreen();

  const handleTodayWorkout = () => {
    dispatch(dashboardModeChanged(DashboardMode.WORKOUT));
  };

  return (
    <>
      <Paper>
        <header className={classes.root}>
          <Typography variant={'h4'}>Summary</Typography>
          {!onlySmallScreen && (
            <Box marginLeft={'auto'}>
              <Button
                variant={'contained'}
                color={'primary'}
                onClick={handleTodayWorkout}
              >
                <Box display={'flex'}>
                  <FitnessCenterOutlinedIcon />
                  <Typography>Today Workout</Typography>
                </Box>
              </Button>
            </Box>
          )}
        </header>
        <section>
          <DetailsCard />
        </section>
      </Paper>
      {onlySmallScreen && (
        <Fab
          color={'primary'}
          className={classes.fab}
          onClick={handleTodayWorkout}
        >
          <FitnessCenterOutlinedIcon />
        </Fab>
      )}
    </>
  );
};

export default Summary;
