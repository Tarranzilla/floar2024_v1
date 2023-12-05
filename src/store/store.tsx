import userAuthReducer from './slices/userAuthSlice'
import cartSlice from './slices/cartSlice'
import themeAndEnvSlice from './slices/themeAndEnvSlice'
import uiSlice from './slices/uiSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    cart: cartSlice,
    themeAndEnv: themeAndEnvSlice,
    userInterface: uiSlice,
    // your reducers will go here
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch