import IAccessToken from './IAccessToken';
import IProfile from './IAccountProfile';

interface IAccountProfileQuery {
  body: {} & IAccessToken & IProfile;
  csrf: string;
}

export default IAccountProfileQuery;
