import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import IAccount from '../interface/IAccount';
import IMetadata from '../interface/IMetadata';
import IAccountProfileBody from '../interface/IAccountProfileBody';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    metadata: builder.query<IMetadata, undefined>({
      query() {
        return `metadata`;
      },
    }),
    authGoogle: builder.query<IAccount, string>({
      query(accessToken) {
        return `auth/google/${accessToken}`;
      },
    }),
    profileAccount: builder.query<undefined, IAccountProfileBody>({
      query(body) {
        return {
          url: 'accounts/profile',
          body,
        };
      },
      onQueryStarted(arg, api) {

      },
    }),
  }),
});

export const {useLazyAuthGoogleQuery, useMetadataQuery} = apiSlice;
