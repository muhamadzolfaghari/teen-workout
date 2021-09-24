import { configureStore } from '@reduxjs/toolkit';
import welcomeWizardReducer from '../features/welcomeWizardSlice';
import appReducer from '../features/appSlice';
import dashboardReducer from '../components/Dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
    welcomeWizard: welcomeWizardReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
