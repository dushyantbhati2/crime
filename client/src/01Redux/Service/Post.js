import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api/v1/community",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.access;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      console.log(token);
    }
    return headers;
  },
});

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // get all posts
    getAllPosts: builder.query({
      query: () => `/allposts/`,
      providesTags: [{ type: "Post", id: "LIST" }],
    }),
    // create post
    createPost: builder.mutation({
      query: (newPost) => ({
        url: `/allposts/`,
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/allposts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    likePost: builder.mutation({
      query: (id) => ({
        url: `/likes/${id}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postApi.util.updateQueryData("getAllPosts", undefined, (draftPosts) => {
            const postToUpdate = draftPosts.find((post) => post.id === id);
            if (postToUpdate) {
              postToUpdate.Liked = true; // Update the property name as per your post object structure
            }
          })
        );
    
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),

    dislikePost: builder.mutation({
      query: (id) => ({
        url: `/likes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    savedPost: builder.mutation({
      query: (id) => ({
        url: `/bookmark/${id}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    unSavedPost: builder.mutation({
      query: (id) => ({
        url: `/bookmark/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
  useDislikePostMutation,
  useSavedPostMutation,
  useUnSavedPostMutation,
} = postApi;
