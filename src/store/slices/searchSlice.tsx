import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import RoupaFloar from "@/types/RoupaFloar";

export type SearchResult = {
    id: string;
    name: string;
    intro: string;
    type: string;
    class: string[];
    url: string;
    icon: string;
    results: any[];
};

type SearchState = {
    pages: string[];
    products: SearchResult[];
    contactInfo: string[];
    blogPosts: string[];
};

const initialState: SearchState = {
    pages: [],
    products: [],
    contactInfo: [],
    blogPosts: [],
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setPages: (state, action: PayloadAction<string[]>) => {
            state.pages = action.payload;
        },
        setProducts: (state, action: PayloadAction<SearchResult[]>) => {
            state.products = action.payload;
        },
        setContactInfo: (state, action: PayloadAction<string[]>) => {
            state.contactInfo = action.payload;
        },
        setBlogPosts: (state, action: PayloadAction<string[]>) => {
            state.blogPosts = action.payload;
        },
    },
});

export const { setPages, setProducts, setContactInfo, setBlogPosts } = searchSlice.actions;

export default searchSlice.reducer;
