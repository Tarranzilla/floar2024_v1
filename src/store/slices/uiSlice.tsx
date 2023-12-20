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
        closeElement: (state) => {
            state.openElement = null;
        },
    },
});

export const { toggleElement, closeElement } = uiSlice.actions;

export default uiSlice.reducer;
