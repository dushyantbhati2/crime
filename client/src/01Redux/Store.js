import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from './Service/Post';
import { commentApi } from './Service/Comment';
import { authApi } from './Service/auth';
import authReducer from './features/authFeature';
import { profileApi } from './Service/profile';
import { collabApi } from './Service/collab';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [collabApi.reducerPath]: collabApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      postApi.middleware,
      commentApi.middleware,
      profileApi.middleware,
      collabApi.middleware
    ),
});

setupListeners(store.dispatch);
