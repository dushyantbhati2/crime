import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";


export  const signApi = createApi({

    reducerPath: "sign",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api"}),
    
    endpoints:(builder)=>({

        //signup 
        signup : builder.mutation({
            query: (newsignup)=> ({
                url: `/signup`,
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: newsignup,
            }),
        }),

        //signin

        loginIn : builder.mutation({
            query: (newlogin) => ({
                url: `/login`,
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: newlogin,
            })
        })
     

    }),
});