import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeModeType } from '../types/ThemeModeType';
import { ValuesType } from '../types/ValuesType';
import { AppMode } from '../lib/app.const';
import IOAuth2 from '../interface/IOAuth2';
import getStorageOauth2 from '../lib/utils/oauth2/getStorageOauth2';
import IUser from '../interface/IUser';

const oauth2 = getStorageOauth2();
type AppModeType = ValuesType<typeof AppMode>;

interface IState {
  user?: IUser;
  oauth2?: IOAuth2;
  appMode: AppModeType;
  themeMode?: ThemeModeType;
}

const initialState: IState = {
  oauth2,
  appMode: AppMode.WELCOME_WIZARD
};


const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    themeModeChanged(state, action: PayloadAction<ThemeModeType>) {
      state.themeMode = action.payload;
    },
    themeModeToggle(state) {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
    appModeChanged(state, action: PayloadAction<AppModeType>) {
      state.appMode = action.payload;
    },
    oauth2Changed(state, action: PayloadAction<IOAuth2 | undefined>) {
      state.oauth2 = action.payload;
    }
  }
});

export const {
  themeModeChanged,
  themeModeToggle,
  appModeChanged,
  oauth2Changed
} = appSlice.actions;
export default appSlice.reducer;
