import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
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
            state.user = action.payload;
            state.isFetching = false;
        },
        loginFailure: (state) => {
            state.error = true
        },
        logout: (state) => {
            state.user = null;
            state.isFetching = false;
            state.error = false;
        }
    }
})

export default authSlice.reducer;
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions