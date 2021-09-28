import { GenderType } from '../types/GenderType';
import { AgeRangeType } from '../types/AgeRangeType';

export default interface IUser {
  name: string;
  email: string;
  image: string;
  height?: number;
  weight?: number;
  gender?: GenderType;
  age_range?: AgeRangeType
}
