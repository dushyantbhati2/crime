import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./Service/dummy";
export const  store = configureStore({

    reducer: {

          [postApi.reducerPath]: postApi.reducer, 
    },

    middleware: (getDefalutMiddleware) => getDefalutMiddleware().concat(postApi.middleware),
    
});

setupListeners(store.dispatch);