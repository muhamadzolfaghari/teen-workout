import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IUser from '../interface/IUser';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    authGoogle: builder.query<IUser, string>({
      query(accessToken) {
        return `auth/google/${accessToken}`;
      },
    }),
  }),
});


export const { useLazyAuthGoogleQuery } = apiSlice;
