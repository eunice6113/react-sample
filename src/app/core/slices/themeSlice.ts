import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';

interface Theme {
    theme: 'theme-light' | 'theme-dark'
}

export const initialState: any = {
    theme: 'theme-light',
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, { payload }) => {
            state.theme = payload;
        },
    },
});

// export the actions
export const { setTheme } = themeSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const themeSelector = (state: RootState) => state.theme;

// export the default reducer
export default themeSlice.reducer;


