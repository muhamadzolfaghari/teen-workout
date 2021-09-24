import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Values } from '../../types/Values';
import { DashboardMode } from '../../lib/dashboard.const';

type DashboardModeType = Values<typeof DashboardMode>;

interface IState {
  activeMode: DashboardModeType;
}

const initialState: IState = {
  activeMode: DashboardMode.HOME,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    dashboardModeChanged(state, action: PayloadAction<DashboardModeType>) {
      state.activeMode = action.payload;
    },
  },
});

export const { dashboardModeChanged } = dashboardSlice.actions;
export default dashboardSlice.reducer;
