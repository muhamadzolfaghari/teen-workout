import classes from './WorkoutDetails.module.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ForwardedRef, forwardRef } from 'react';
import IWorkout from '../../../../interface/IWorkout';

const WorkoutDetails = forwardRef(
  (
    { image, name, length, description, repeat }: IWorkout,
    ref: ForwardedRef<HTMLDivElement | null>,
  ) => (
    <div ref={ref}>
      <Box display={'flex'} justifyContent={'center'}>
        <img
          src={process.env.REACT_APP_API_BASE_URL + image}
          alt={name}
          className={classes.image}
        />
      </Box>
      <Typography variant={'h4'} gutterBottom>
        {name} {length ?? `x ${repeat}`}
      </Typography>
      <Typography gutterBottom>{description}</Typography>
    </div>
  ),
);

WorkoutDetails.displayName = 'WorkoutDetails';

export default WorkoutDetails;
