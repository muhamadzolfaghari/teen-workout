import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IOAuth2 from '../interface/IOAuth2';
import IAccount from '../interface/IAccount';
import getDataFromStorage from '../lib/utils/oauth2/getDataFromStorage';
import { ACCOUNT_STORAGE_KEY, OAUTH2_STORAGE_KEY } from '../lib/account.const';
import IProfile from '../interface/IProfile';

const OAUTH2_KEYS: (keyof IOAuth2)[] = [
  'state',
  'scope',
  'token_type',
  'expires_in',
  'access_token',
];

const ACCOUNT_KEYS: (keyof IAccount)[] = [
  'name',
  'email',
  'image',
  'is_completed',
];

interface IState {
  csrf?: string;
  oauth2?: IOAuth2;
  profile?: IProfile;
  account?: IAccount;
}

const initialState: IState = {
  oauth2: getDataFromStorage(OAUTH2_STORAGE_KEY, OAUTH2_KEYS),
  account: getDataFromStorage(ACCOUNT_STORAGE_KEY, ACCOUNT_KEYS),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    oauth2Changed(state, action: PayloadAction<IOAuth2 | undefined>) {
      state.oauth2 = action.payload;
    },
    accountChanged(state, action: PayloadAction<IAccount | undefined>) {
      state.account = action.payload;
    },
    csrfChanged(state, action: PayloadAction<string>) {
      state.csrf = action.payload;
    },
    profileChanged(state, action: PayloadAction<IProfile | undefined>) {
      state.profile = action.payload;
    },
  },
});

export const { oauth2Changed, accountChanged, csrfChanged, profileChanged } =
  authSlice.actions;
export default authSlice.reducer;
