import * as React from 'react';
import { useState } from 'react';
import WorkoutDetails from './WorkoutDetails/WorkoutDetails';
import { WORKOUTS } from './workout.const';
import Typography from '@mui/material/Typography';
import Paper from '../../UI/Dashboard/Paper/Paper';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import IWorkout from '../../../interface/IWorkout';
import Card from '../../UI/Dashboard/Card/Card';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import BoldText from '../../UI/BoldText';

const Workout = () => {
  const [workout, setWorkout] = useState(WORKOUTS[0]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleWorkoutClick = (workout: IWorkout) => () => {
    setWorkout(workout);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Paper>
        <Typography variant={'h4'} gutterBottom>
          Workouts
        </Typography>
        <Typography variant={'subtitle1'} gutterBottom>
          <BoldText>11 Minutes - {WORKOUTS.length} workouts</BoldText>
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
