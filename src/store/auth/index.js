import { createSlice } from "@reduxjs/toolkit";
import { UserRole } from "../../constant";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            email: '',
            role: UserRole.TRAVELLER,
        },
        isAuthorized: false,
    },
    reducers: {
        setUserEmail: (state, action) => {
            state.user.email = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAuthorized: (state, action) => {
            state.isAuthorized = action.payload;
        }
    },
});

export const { setUserEmail, setUser, setAuthorized } = authSlice.actions;
export const authReducer = authSlice.reducer;