import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({

    reducerPath: "post",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api"}),

    endpoints: (builder) => ({
       
        //get all posts
        getAllPosts: builder.query({query:()=>`/allposts`}),

        // create a post 
        createPost : builder.mutation({
            query: (newPost)=>({
                url: `/allposts`,
                method:"post",
                headers: {"Content-Type": "application/json"},
                body: newPost,
            }),
        }) ,

        
    }),

});
export const { useGetAllPostsQuery } = postApi