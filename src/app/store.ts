import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./core/slices/apiSlice";
import historySlice from "./core/slices/historySlice";
import baseApiSlice from "./core/slices/base/baseApiSlice";
import authSlice from "./core/slices/base/authSlice";

export const store = configureStore({
    reducer: {
        api: baseApiSlice,
        auth: authSlice,
        sitems: apiSlice,
        history: historySlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch