import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking'
    },
    reducers: {
        login: ( state, { payload }) => {
            state.status = 'authenticated'
        },
        logout: ( state, { payload }) => {
            state.status = 'not-authenticated'
        },
        checkingCredentials: (state, { payload }) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;