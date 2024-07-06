import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";


export  const authApi = createApi({

    reducerPath: "User",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api"}),

    endpoints: (builder) => ({
        login: builder.mutation({
          query: (data) => ({
            url: `/token/`,
            method: "POST",
            body: data,
          }),
        }),
        register: builder.mutation({
          query: (data) => ({
            url: `/signup/`,
            method: "POST",
            body: data,
          }),
        }),
        completeProfile: builder.mutation({
          query: (data) => ({
            url: `/signup/`,
            method: "POST",
            body: data,
          }),
        }),
        logout: builder.mutation({
          query: () => ({
            url: `/logout`,
            method: "POST",
          }),
        }),
        profile: builder.mutation({
          query: (data) => ({
            url: `/profile`,
            method: "PUT",
            body: data,
          }),
        }),
        getUsers: builder.query({
          query: () => ({
            url: '/getAllUsers',
          }),
          providesTags: ["User"],
          keepUnusedDataFor: 5,
        }),
        deleteUser: builder.mutation({
          query: (userId) => ({
            url: `/${userId}`,
            method: "DELETE",
          }),
        }),
        getUserDetails: builder.query({
          query: (id) => ({
            url: `/${id}`,
          }),
          keepUnusedDataFor: 5,
        }),
        updateUser: builder.mutation({
          query: (data) => ({
            url: `/${data.userId}`,
            method: "PUT",
            body: data,
          }),
          invalidatesTags: ["User"],
        }),
      }),
    });
    
    export const {
      useLoginMutation,
      useLogoutMutation,
      useRegisterMutation,
      useProfileMutation,
      useGetUsersQuery,
      useDeleteUserMutation,
      useUpdateUserMutation,
      useGetUserDetailsQuery,
    } = authApi;
    
