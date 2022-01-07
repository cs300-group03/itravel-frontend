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
            if (action.payload)
                state.user = action.payload;
            else {
                state.user = {
                    email: '',
                    role: UserRole.TRAVELLER,
                };
            }
        },
        setAuthorized: (state, action) => {
            state.isAuthorized = action.payload;
        }
    },
});

export const { setUserEmail, setUser, setAuthorized } = authSlice.actions;
export const authReducer = authSlice.reducer;