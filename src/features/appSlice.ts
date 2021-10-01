import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeModeType } from '../types/ThemeModeType';
import { ValuesType } from '../types/ValuesType';
import { AppMode } from '../lib/app.const';
import IMetadata from '../interface/IMetadata';

type AppModeType = ValuesType<typeof AppMode>;

interface IState {
  metadata?: IMetadata;
  appMode: AppModeType;
  themeMode?: ThemeModeType;
}

const initialState: IState = {
  appMode: AppMode.WELCOME_WIZARD,
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

    metadataFetched(state, action: PayloadAction<IMetadata>) {
      state.metadata = action.payload;
    },
  },
});

export const {
  themeModeChanged,
  themeModeToggle,
  appModeChanged,
  metadataFetched,
} = appSlice.actions;
export default appSlice.reducer;
