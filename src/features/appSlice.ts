import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeModeType } from '../types/ThemeModeType';

interface IState {
  themeMode?: ThemeModeType;
}

const initialState: IState = {};

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
