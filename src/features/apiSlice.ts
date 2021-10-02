import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IAccount from '../interface/IAccount';
import IAccountProfileQuery from '../interface/IAccountProfileBody';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL
  }),
  endpoints: (builder) => ({
    authCsrf: builder.query({
      query: () => ({ url: `auth/csrf/`, responseHandler: (res) => res.text() })
    }),
    authGoogle: builder.query<IAccount, string>({
      query: accessToken => `auth/google/${accessToken}`
    }),
    profileAccount: builder.query<undefined, IAccountProfileQuery>({
      query: ({ body, csrf }) => ({
        body,
        method: 'POST',
        url: 'accounts/profile/',
        headers: { 'X-CSRFToken': csrf }
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        console.log(data);
      }
    })
  })
});

export const {
  useAuthCsrfQuery,
  useLazyAuthGoogleQuery,
  useLazyProfileAccountQuery
} = apiSlice;
