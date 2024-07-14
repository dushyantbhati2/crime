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

export const commentApi = createApi({
  reducerPath: "commentApi",

  baseQuery: baseQueryWithAuth,
  tagTypes: ["Comment"],

  endpoints: (builder) => ({
    // view all comments
    getAllComments: builder.query({
      query: (id) => `/comments/${id}`,

      providesTags: [{ type: "Comment", id: "LIST" }],
    }),

    // create comment
    createComment: builder.mutation({
      query: ({ id, content }) => ({
        url: `/comments/${id}`,
        method: "POST",
        body: content,
      }),
      invalidatesTags: [{ type: "Comment", id: "LIST" }],
    }),
    
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Comment", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
