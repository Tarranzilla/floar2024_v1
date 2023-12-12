import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UiState = {
    openElement: "cookie" | "menu" | "search" | "cart" | "imageDetail" | "productDetail" | "termsOfService" | "privacyPolicy" | null;
};

const initialState: UiState = {
    openElement: "cookie",
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleElement: (state, action: PayloadAction<UiState["openElement"]>) => {
            state.openElement = state.openElement === action.payload ? null : action.payload;
        },
    },
});

export const { toggleElement } = uiSlice.actions;

export default uiSlice.reducer;
