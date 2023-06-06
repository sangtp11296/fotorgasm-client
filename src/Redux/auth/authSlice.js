import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
    user: null,
    userID: null,
    userAvatar: null,
    isFetching: false,
    error: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload.username;
            state.userID = action.payload.userID;
            state.userAvatar = action.payload.userAvatar;
            state.isFetching = false;
        },
        loginFailure: (state) => {
            state.error = true
        },
        logout: (state) => {
            state.user = null;
            state.userID = null;
            state.isFetching = false;
            state.error = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, (state) => {
            customEntityAdapter.removeAll(state);
        });
    }
})

export default authSlice.reducer;
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions