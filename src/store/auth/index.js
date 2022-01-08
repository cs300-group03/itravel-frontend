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
        },
        upvote: (state, action) => {
            if (state.user.upvoted.includes(action.payload)) {
                state.user.upvoted.pop(action.payload);
            } else {
                if (state.user.downvoted.includes(action.payload)) {
                    state.user.downvoted.pop(action.payload);
                }
                state.user.upvoted.push(action.payload);
            }
        },
        downvote: (state, action) => {
            if (state.user.downvoted.includes(action.payload)) {
                state.user.downvoted.pop(action.payload);
            } else {
                if (state.user.upvoted.includes(action.payload)) {
                    state.user.upvoted.pop(action.payload);
                }
                state.user.downvoted.push(action.payload);
            };
        },
        resetLogoutAuth: (state) => {
            state ={ 
                user: {
                    email: '',
                    role: UserRole.TRAVELLER,
                },
                isAuthorized: false,
            };
        },
    },
});

export const { setUserEmail, setUser, setAuthorized, upvote, downvote, resetLogoutAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;