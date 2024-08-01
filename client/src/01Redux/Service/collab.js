import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api/v1/camps',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.access;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const collabApi = createApi({
  reducerPath: 'collabApi',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // get all posts
    getAllCamps: builder.query({
      query: () => `/`,
      providesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    getSingleCamps: builder.query({
      query: (id) => `/allposts/${id}`,
    }),
    // create post
    createCamps: builder.mutation({
      query: (newPost) => ({
        url: `/allposts/`,
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),

    deleteCamps: builder.mutation({
      query: (id) => ({
        url: `/allposts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllCampsQuery,
  useGetSingleCampsQuery,
  useCreateCampsMutation,
  useDeleteCampsMutation,
} = collabApi;
