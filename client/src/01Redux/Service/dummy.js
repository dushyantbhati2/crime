import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({

    reducerPath: "post",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api"}),

    endpoints: (builder) => ({
       
        //get all posts
        getAllPosts: builder.query({query:()=>`/allposts`}),


        
    }),

});
export const { useGetAllPostsQuery } = postApi