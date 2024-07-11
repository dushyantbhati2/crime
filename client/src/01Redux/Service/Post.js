import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.access; 
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      console.log(token)
    }
    return headers;
  },
});

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Post'], 
  endpoints: (builder) => ({
    // create post
    createPost: builder.mutation({
      query: (newPost) => ({
        url: `/allposts/`,
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    // get all posts
    getAllPosts: builder.query({
      query: () => `/allposts/`,
      providesTags: [{ type: 'Post', id: 'LIST' }], 
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url:`/likes/${id}`,
        method:"POST"
      }),
    }),
    dislikePost: builder.mutation({
      query: (id) => ({
        url: `/likes/${id}`,
        method: "DELETE",
      }),
    }),
    savedPost: builder.mutation({
      query: (id) => ({
        url:`/bookmark/${id}`,
        method:"POST"
      }),
    }),
    unSavedPost: builder.mutation({
      query: (id) => ({
        url: `/bookmark/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation, useLikePostMutation, useDislikePostMutation , useSavedPostMutation, useUnSavedPostMutation} = postApi;
