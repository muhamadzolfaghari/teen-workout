import * as React from 'react';
import { useState } from 'react';
import WorkoutDetails from './WorkoutDetails/WorkoutDetails';
import Typography from '@mui/material/Typography';
import Paper from '../../UI/Dashboard/Paper/Paper';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import IWorkout from '../../../interface/IWorkout';
import Card from '../../UI/Dashboard/Card/Card';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Skeleton from '@mui/material/Skeleton';
import DialogContent from '@mui/material/DialogContent';
import BoldText from '../../UI/BoldText';
import { useGetWorkoutsQuery } from '../../../features/apiSlice';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../app/hooks';

const Workout = () => {
  const { oauth2 } = useSelector(authSelector);
  const { data } = useGetWorkoutsQuery({ access_token: oauth2?.access_token! });
  const [workout, setWorkout] = useState<IWorkout>();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleWorkoutClick = (workout: IWorkout) => () => {
    setWorkout(workout);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  if (!data) {
    return (
      <Paper>
        <Skeleton variant="text" width={200} height={70} />
        <Skeleton variant="text" width={200} sx={{ marginBottom: 0.5 }} />
        {Array(5)
          .fill(null)
          .map((item, key) => (
            <Skeleton
              key={key}
              height={80}
              variant="rectangular"
              sx={{ marginBottom: 1 }}
            />
          ))}
      </Paper>
    );
  }

  return (
    <>
      <Paper>
        <Typography variant={'h4'} gutterBottom>
          Workouts
        </Typography>
        <Typography variant={'subtitle1'} gutterBottom>
          <BoldText>11 Minutes - {data.results.length} workouts</BoldText>
        </Typography>
        <Card>
          {data.results.map((workout) => (
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
          {workout && <WorkoutDetails {...workout} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default Workout;
