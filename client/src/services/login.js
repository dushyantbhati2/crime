import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const loginApi=createApi({
    reducerPath:'loginApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://127.0.0.1:8000/api'}),
    endpoints:(bulider)=>({
        loginUser:bulider.mutation({
            query:(loginUser)=>({
            url:'/login/',
            method:'POST',
            body:loginUser
        }),

        })
    })
})

export const {useLoginUserMutation} = loginApi;