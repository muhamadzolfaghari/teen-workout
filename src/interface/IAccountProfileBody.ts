import IAccessToken from './IAccessToken';
import IProfile from './IAccountProfile';

interface IAccountProfileBody {
  body: {
    account_id: string;
  } & IAccessToken & IProfile;
  csrf: string;
}

export default IAccountProfileBody;
