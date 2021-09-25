import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useRef, useState } from 'react';
import useOnlyMediumScreen from '../../../hooks/useOnlyMediumScreen';
import WorkoutDetails from './WorkoutDetails/WorkoutDetails';
import { WORKOUTS } from './workout.const';
import Typography from '@mui/material/Typography';
import Paper from '../../UI/Dashboard/Paper/Paper';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import IWorkout from '../../../interface/IWorkout';
import Card from '../../UI/Dashboard/Card/Card';
import useOnlySmallScreen from '../../../hooks/useOnlySmallScreen';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

const Workout = () => {
  const onlySmallScreen = useOnlySmallScreen();
  const onlyMediumScreen = useOnlyMediumScreen();
  const [workout, setWorkout] = useState(WORKOUTS[0]);
  const workoutsRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleWorkoutClick = (workout: IWorkout) => () => {
    setWorkout(workout);
    // if (onlyMediumScreen) {
    // }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Grid container spacing={onlyMediumScreen ? 2 : 5}>
        <Grid md item xs={12} ref={workoutsRef}>
          <Paper>
            <Typography variant={'h4'} gutterBottom>
              Workouts
            </Typography>
            <Card>
              {WORKOUTS.map((workout) => (
                <WorkoutCard
                  item={workout}
                  key={workout.id}
                  onClick={handleWorkoutClick(workout)}
                />
              ))}
            </Card>
          </Paper>
        </Grid>
        {!onlySmallScreen && (
          <Grid md item>
            <Paper>
              <WorkoutDetails {...workout} />
            </Paper>
          </Grid>
        )}
      </Grid>

      <Dialog open={dialogOpen}>
        <DialogContent>
          <WorkoutDetails {...workout} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Workout;
