import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IAccount from '../interface/IAccount';
import IPostProfileBody from '../interface/IPostProfileBody';
import IGetProfileQuery from '../interface/IGetProfileQuery';
import IProfile from '../interface/IProfile';
import IWorkout from '../interface/IWorkout';
import IAccessToken from '../interface/IAccessToken';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    authCsrf: builder.query({
      query: () => ({
        url: `auth/csrf/`,
        responseHandler: (res) => res.text(),
      }),
    }),
    authGoogle: builder.query<IAccount, string>({
      query: (accessToken) => `auth/google/${accessToken}`,
    }),
    postProfile: builder.query<{}, IPostProfileBody>({
      query: (body) => ({
        body,
        method: 'POST',
        url: 'accounts/profile/',
      }),
    }),
    getProfile: builder.query<IProfile, IGetProfileQuery>({
      query: ({ access_token, account_id }) =>
        `accounts/profile/${account_id}/${access_token}`,
    }),
    getWorkouts: builder.query<{ results: IWorkout[] }, IAccessToken>({
      query: ({ access_token }) =>
        `workouts/${access_token}`,
    }),
  }),
});

export const {
  useAuthCsrfQuery,
  useGetProfileQuery,
  useGetWorkoutsQuery,
  useLazyAuthGoogleQuery,
  useLazyPostProfileQuery,
} = apiSlice;
