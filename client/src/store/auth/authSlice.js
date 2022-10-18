import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status: 'not-authenticated', //  'authenticating', 'authenticated', 'error'
        user:{},
        errorMessage: undefined
    },
    reducers:{
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        logOut: (state,{ payload }) =>{
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: ( state ) =>{
            state.status = 'authenticating';
        },
        clearErrorMessage: ( state ) =>{
            state.errorMessage = undefined;
        }
    }
}); 

export const { login, logOut, checkingCredentials,clearErrorMessage } = authSlice.actions;