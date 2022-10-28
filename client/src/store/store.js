import { configureStore } from '@reduxjs/toolkit'; 
import { authSlice } from './auth/authSlice';
import { glassesSlice } from './glasses/glassesSlice';



export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        glasses: glassesSlice.reducer,
    }
}); 