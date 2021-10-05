import { MealType } from '../types/MealType';

export default interface IFood {
  id: number;
  image: string;
  name: string;
  description: string;
  meal_type: MealType;
}
