import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserAuthState = {
	token: string;
	user_accepted_cookies: boolean;
	new_user: boolean;
	user_type: string;
	lastAccess: string;
};

const initialState: UserAuthState = {
	token: "",
	user_accepted_cookies: false,
	new_user: true,
	user_type: "visitante",
	lastAccess: "",
};

export const userAuthSlice = createSlice({
	name: "userAuth",
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setAcceptedCookies: (state, action: PayloadAction<boolean>) => {
			state.user_accepted_cookies = action.payload;
		},
		setNewUser: (state, action: PayloadAction<boolean>) => {
			state.new_user = action.payload;
		},
		setUserType: (state, action: PayloadAction<string>) => {
			state.user_type = action.payload;
		},
		setLastAccess: (state, action: PayloadAction<string>) => {
			state.lastAccess = action.payload;
		},
	},
});

export const {
	setToken,
	setAcceptedCookies,
	setNewUser,
	setUserType,
	setLastAccess,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
