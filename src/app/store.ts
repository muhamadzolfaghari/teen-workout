import { configureStore } from '@reduxjs/toolkit';
import welcomeWizardReducer from '../features/welcomeWizardSlice';
import appReducer from '../features/appSlice';
import dashboardReducer from '../components/Dashboard/dashboardSlice';
import { apiSlice } from '../features/apiSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
    welcomeWizard: welcomeWizardReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
