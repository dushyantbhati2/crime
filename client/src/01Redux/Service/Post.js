import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    // create a post
    createPost: builder.mutation({
      query: (newPost) => ({
        url: `/allposts/`,
        method: "POST",
        body: newPost,
      }),
    }),
    // get all posts
    getAllPosts: builder.query({
      query: () => `/allposts/`,
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation } = postApi;
