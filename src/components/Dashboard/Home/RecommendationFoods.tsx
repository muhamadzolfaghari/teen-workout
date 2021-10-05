import Typography from '@mui/material/Typography';
import Card from '../../UI/Dashboard/Card/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Paper from '../../UI/Dashboard/Paper/Paper';
import * as React from 'react';
import { useEffect } from 'react';
import { useGetRecommendationFoodsQuery } from '../../../features/apiSlice';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../app/hooks';
import useLogout from '../../../hooks/useLogout';
import Skeleton from '@mui/material/Skeleton';
import IFood from '../../../interface/IFood';
import Box from '@mui/material/Box';

let FoodCard = ({ food }: { food?: IFood }) => (
  <Card>
    <CardHeader
      title={
        food ? (
          <Typography variant={'h6'}>{food.name}</Typography>
        ) : (
          <Skeleton variant={'text'} width={80} />
        )
      }
      subheader={
        food ? food.meal_type : <Skeleton variant={'text'} width={80} />
      }
      avatar={
        food ? (
          <Avatar
            sx={{ width: 80, height: 80 }}
            src={process.env.REACT_APP_API_BASE_URL + food.image}
          />
        ) : (
          <Skeleton variant={'circular'} height={80} width={80} />
        )
      }
    />
    <CardContent
      sx={{
        paddingTop: 0,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: 60,
      }}
    >
      {food ? (
        food.description
      ) : (
        <>
          <Skeleton variant={'text'} />
          <Skeleton variant={'text'} />
        </>
      )}
    </CardContent>
  </Card>
);

const RecommendationFoods = () => {
  const { oauth2 } = useSelector(authSelector);
  const { data, error } = useGetRecommendationFoodsQuery({
    access_token: oauth2?.access_token!,
  });
  const { logout } = useLogout();

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

  return (
    <Paper>
      <Typography variant={'h4'} gutterBottom>
        Recommendation Foods
      </Typography>
      <FoodCard food={data?.results[0]} />
      <Box sx={{ marginTop: 1 }} />
      <FoodCard food={data?.results[1]} />
      <Box sx={{ marginTop: 1 }} />
      <FoodCard food={data?.results[2]} />
    </Paper>
  );
};

export default RecommendationFoods;
