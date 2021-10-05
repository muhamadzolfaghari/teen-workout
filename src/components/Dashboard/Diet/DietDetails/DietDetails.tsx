import classes from './DietDetails.module.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ForwardedRef, forwardRef } from 'react';
import IFood from '../../../../interface/IFood';

const DietDetails = forwardRef(
  (
    { image, name, meal_type, description }: IFood,
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
        {name} {meal_type}
      </Typography>
      <Typography gutterBottom>{description}</Typography>
    </div>
  ),
);

DietDetails.displayName = 'WorkoutDetails';

export default DietDetails;
