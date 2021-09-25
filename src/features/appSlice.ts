import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeModeType } from '../types/ThemeModeType';
import { Values } from '../types/Values';
import { AppMode } from '../lib/app.const';

interface IState {
  themeMode?: ThemeModeType;
  appMode: Values<typeof AppMode>;
}

const initialState: IState = {
  appMode: AppMode.DASHBOARD,
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
  },
});

export const { themeModeChanged, themeModeToggle } = appSlice.actions;
export default appSlice.reducer;
