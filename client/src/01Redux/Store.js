import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./Service/Post";
import { commentApi } from "./Service/Comment";
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,

    [commentApi.reducerPath]: commentApi.reducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentApi.middleware),
  
});

setupListeners(store.dispatch);
