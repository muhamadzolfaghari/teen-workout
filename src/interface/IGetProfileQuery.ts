import IAccessToken from './IAccessToken';

export default interface IGetProfileQuery extends IAccessToken {
  account_id: number;
}
