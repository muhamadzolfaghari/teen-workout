import IAccessToken from './IAccessToken';
import IProfile from './IProfile';

interface IPostProfileBody extends IAccessToken, IProfile {
  account_id: number;
}

export default IPostProfileBody
