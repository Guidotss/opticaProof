import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status: 'not-authenticated', //  'authenticating', 'authenticated', 'error'
        displayName: null,
        email: null,
        uId: null,
        token: null,
        errorMessage: null,
    },
    reducers:{
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.uId = payload.uId;
            state.token = payload.token;
            state.errorMessage = null;
        },
        logOut: (state,{ payload }) =>{
            state.status = 'not-authenticated';
            state.displayName = null;
            state.email = null;
            state.uId = null;
            state.token = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: ( state ) =>{
            state.status = 'authenticating';
        }
    }
}); 

export const { login, logOut, checkingCredentials } = authSlice.actions;