import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import historySlice from "./slices/historySlice";
import baseApiSlice from "./slices/base/baseApiSlice";
import authSlice from "./slices/base/authSlice";
import themeSelector from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        api: baseApiSlice,
        auth: authSlice,
        sitems: apiSlice,
        history: historySlice,
        theme: themeSelector,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch