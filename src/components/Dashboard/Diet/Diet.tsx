import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '../../UI/Dashboard/Paper/Paper';
import IWorkout from '../../../interface/IWorkout';

const Diet = () => {
  const [workout, setWorkout] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleWorkoutClick = (workout: IWorkout) => () => {
    // setWorkout(workout);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Paper>
        <Typography variant={'h4'} gutterBottom>
          Diet
        </Typography>
      </Paper>
    </>
  );
};

export default Diet;
