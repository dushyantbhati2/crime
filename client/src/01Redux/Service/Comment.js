import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const commentApi = createApi({

     reducerPath: "comment",

     baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api"}),
    
     endpoints:(builder)=> ({
      
        // view all comments
        getAllComments : builder.query({query:(id) => `comments/${id}`}),
        
        // create comment

        createComment : builder.mutation({
            
            query:(id, newComment) =>({
              url : `/comments/${(id)}`,
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: newComment

            }),

         // Delete Comment

         
        }),
        deleteComment : builder.mutation({
            query: (id) => ({

                url : `/comments/${id}`,
                method : "DELETE",
            
            }),
        }),

    })
});

export const {useGetAllCommentsQuery , useCreateCommentMutation, useDeleteCommentMutation }=commentApi;