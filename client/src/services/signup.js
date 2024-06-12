import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signupApi=createApi({
    reducerPath:"signupApi",
    baseQuery:fetchBaseQuery({baseUrl:'http://127.0.0.1:8000/api'}),
    endpoints:(builder) => ({
        signupUser:builder.mutation({
            query:(signupUser) =>({
                url:'/signup/',
                method:'POST',
                body:signupUser
            }),
        })
    })
})

export const {useSignupUserMutation}=signupApi;