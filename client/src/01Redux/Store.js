import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./Service/Post";
import { commentApi } from "./Service/Comment";
import { authApi } from "./Service/auth";
import authReducer from "./features/authFeature"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      postApi.middleware,
      commentApi.middleware
    ),
});

setupListeners(store.dispatch);
