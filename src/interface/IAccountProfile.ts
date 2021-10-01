import {GenderType} from '../types/GenderType';
import {AgeRangeType} from '../types/AgeRangeType';

interface IProfile {
    height: number;
    weight: number;
    gender: GenderType;
    age_range: AgeRangeType;
}

export default IProfile;
