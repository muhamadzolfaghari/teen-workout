import IAccessToken from './IAccessToken';
import IProfile from './IAccountProfile';

interface IAccountProfileBody extends IAccessToken, IProfile {}

export default IAccountProfileBody;
