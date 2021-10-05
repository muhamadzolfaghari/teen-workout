import IFood from '../../../interface/IFood';
import { MealType } from '../../../types/MealType';
import Skeleton from '@mui/material/Skeleton';
import DietCard from './DietCard';
import * as React from 'react';
import Box from '@mui/material/Box';

interface IProps {
  foods?: IFood[];
  mealType: MealType;
  onClick: (food: IFood) => () => void;
}

const FoodCardByMealType = ({ foods, mealType, onClick }: IProps) => (
  <Box sx={{ borderRadius: 6, overflow: 'hidden' }}>
    {!foods
      ? Array(2)
          .fill(null)
          .map((item, key) => (
            <Skeleton
              key={key}
              height={80}
              variant="rectangular"
              sx={{ marginBottom: 1 }}
            />
          ))
      : foods
          .filter((food) => food.meal_type === mealType)
          .map((food) => (
            <DietCard item={food} key={food.id} onClick={onClick(food)} />
          ))}
  </Box>
);

export default FoodCardByMealType;
