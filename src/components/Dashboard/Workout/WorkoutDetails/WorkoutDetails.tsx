import classes from './WorkoutDetails.module.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ForwardedRef, forwardRef } from 'react';
import IWorkout from '../../../../interface/IWorkout';

const WorkoutDetails = forwardRef(
  (
    { image, name, length, description }: IWorkout,
    ref: ForwardedRef<HTMLDivElement | null>
  ) => (
    <div ref={ref}>
      <Box display={'flex'} justifyContent={'center'}>
        <img src={image} alt={name} className={classes.image} />
      </Box>
      <Typography variant={'h4'} gutterBottom>
        {name} {length}
      </Typography>
      <Typography gutterBottom>{description}</Typography>
    </div>
  )
);

WorkoutDetails.displayName = 'WorkoutDetails';

export default WorkoutDetails;
