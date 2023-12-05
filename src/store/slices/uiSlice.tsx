import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserFocus = {
  page: string,
  section: number,
}

type UiState = {
  userFocus: UserFocus,
  isCookieOpen: boolean,
  isMenuOpen: boolean,
  isSearchOpen: boolean,
  isCartOpen: boolean,
  isImageDetailOpen: boolean,
  isProductDetailOpen: boolean,
  isTermsOfServiceOpen: boolean,
  isPrivacyPolicyOpen: boolean
}

const initialState: UiState = {
  userFocus: {
    page: "home",
    section: 1,
  },
  isCookieOpen: true,
  isMenuOpen: false,
  isSearchOpen: false,
  isCartOpen: false,
  isImageDetailOpen: false,
  isProductDetailOpen: false,
  isTermsOfServiceOpen: false,
  isPrivacyPolicyOpen: false
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUserFocus: (state, action: PayloadAction<UserFocus>) => {
      state.userFocus = action.payload;
    },
    toggleCookie: (state) => {
      state.isCookieOpen = !state.isCookieOpen;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    toggleImageDetail: (state) => {
      state.isImageDetailOpen = !state.isImageDetailOpen;
    },
    toggleProductDetail: (state) => {
      state.isProductDetailOpen = !state.isProductDetailOpen;
    },
    toggleTermsOfService: (state) => {
      state.isTermsOfServiceOpen = !state.isTermsOfServiceOpen;
    },
    togglePrivacyPolicy: (state) => {
      state.isPrivacyPolicyOpen = !state.isPrivacyPolicyOpen;
    }
  }
})

export const { setUserFocus, toggleCookie, toggleMenu, toggleSearch, toggleCart, toggleImageDetail, toggleProductDetail, toggleTermsOfService, togglePrivacyPolicy } = uiSlice.actions;

export default uiSlice.reducer;