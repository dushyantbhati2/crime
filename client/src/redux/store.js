import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {loginApi} from '../services/login'
import { signupApi } from '../services/signup'
export const store=configureStore({
    reducer:{
        [loginApi.reducerPath]: loginApi.reducer,
        [signupApi.reducerPath]:signupApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loginApi.middleware),
})
setupListeners(store.dispatch)