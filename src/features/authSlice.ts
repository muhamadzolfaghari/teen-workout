import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IOAuth2 from '../interface/IOAuth2';
import getStorageOauth2 from '../lib/utils/oauth2/getStorageOauth2';
import IAccount from '../interface/IAccount';

interface IState {
  oauth2?: IOAuth2;
  account?: IAccount;
}

const initialState: IState = {
  oauth2: getStorageOauth2(),
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
  },
});

export const { oauth2Changed, accountChanged } = authSlice.actions;
export default authSlice.reducer;
