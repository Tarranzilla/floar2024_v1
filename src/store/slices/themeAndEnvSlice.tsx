import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark" | "summer" | "autumn" | "winter" | "spring";
type Language = "pt-BR" | "en-US";
type Currency = "real" | "dollar";

type ThemeAndEnvState = {
  preferredTheme: Theme,
  preferredLanguage: Language,
  preferredCurrency: Currency
}

const initialState: ThemeAndEnvState = {
  preferredTheme: "light",
  preferredLanguage: "pt-BR",
  preferredCurrency: "real"
}

export const themeAndEnvSlice = createSlice({
  name: "themeAndEnv",
  initialState,
  reducers: {
    setPreferredTheme: (state, action: PayloadAction<Theme>) => {
      state.preferredTheme = action.payload;
    },
    setPreferredLanguage: (state, action: PayloadAction<Language>) => {
      state.preferredLanguage = action.payload;
    },
    setPreferredCurrency: (state, action: PayloadAction<Currency>) => {
      state.preferredCurrency = action.payload;
    }
  }
})

export const { setPreferredTheme, setPreferredLanguage, setPreferredCurrency } = themeAndEnvSlice.actions;

export default themeAndEnvSlice.reducer;