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

const Workout = () => {
  const onlyMediumScreen = useOnlyMediumScreen();
  const [workout, setWorkout] = useState(WORKOUTS[0]);
  const workoutsRef = useRef<HTMLDivElement>(null);

  const handleWorkoutClick = (workout: IWorkout) => () => {
    setWorkout(workout);
    if (onlyMediumScreen && workoutsRef.current) {
      const height = workoutsRef.current.getBoundingClientRect().height;
      window.scroll({ top: height + 16, behavior: 'smooth' });
    }
  };

  return (
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
      <Grid md item>
        <Paper>
          <WorkoutDetails {...workout} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Workout;
