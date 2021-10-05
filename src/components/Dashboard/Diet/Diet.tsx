import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '../../UI/Dashboard/Paper/Paper';
import { useGetFoodsQuery } from '../../../features/apiSlice';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../app/hooks';
import useLogout from '../../../hooks/useLogout';
import IFood from '../../../interface/IFood';
import BoldText from '../../UI/BoldText';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import BreakfastDiningOutlinedIcon
  from '@mui/icons-material/BreakfastDiningOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import FoodCardByMealType from './FoodCardByMealType';
import Grid from '@mui/material/Grid';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DietDetails from './DietDetails/DietDetails';

const Diet = () => {
  const { oauth2 } = useSelector(authSelector);
  const { data, error } = useGetFoodsQuery({
    access_token: oauth2?.access_token!,
  });
  const { logout } = useLogout();
  const [food, setFood] = useState<IFood>();
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

  const handleDietClick = (food: IFood) => () => {
    setFood(food);
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
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography variant={'subtitle1'} gutterBottom>
              <BoldText display={'flex'} alignItems={'center'}>
                <BreakfastDiningOutlinedIcon /> Breakfast
              </BoldText>
            </Typography>
            <FoodCardByMealType
              mealType={'breakfast'}
              foods={data?.results}
              onClick={handleDietClick}
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant={'subtitle1'} gutterBottom>
              <BoldText display={'flex'} alignItems={'center'}>
                <RestaurantOutlinedIcon /> Lunch
              </BoldText>
            </Typography>
            <FoodCardByMealType
              mealType={'lunch'}
              foods={data?.results}
              onClick={handleDietClick}
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant={'subtitle1'} gutterBottom>
              <BoldText display={'flex'} alignItems={'center'}>
                <DinnerDiningOutlinedIcon /> Dinner
              </BoldText>
            </Typography>
            <FoodCardByMealType
              mealType={'dinner'}
              foods={data?.results}
              onClick={handleDietClick}
            />
          </Grid>
        </Grid>
      </Paper>
      <Dialog open={dialogOpen}>
        <DialogContent>{food && <DietDetails {...food} />}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Diet;



