import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {}
    },
    reducers: {
        setUserEmail: (state, action) => {
            state.user.email = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setUserEmail, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;