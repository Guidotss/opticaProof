import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status: 'not-authenticated', //  'authenticating', 'authenticated', 'error'
        displayName: null,
        email: null,
        uId: null,
        token: null,
        error: null,
    },
    reducers:{
        login: (state, action) => {

        },
        logOut: (state,payload) =>{

        },
        checkingCredentials: ( state ) =>{
            state.status = 'authenticating';
        }
    }
}); 

export const { login, logOut, checkingCredentials } = authSlice.actions;