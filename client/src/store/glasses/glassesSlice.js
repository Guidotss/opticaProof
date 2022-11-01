import { createSlice } from '@reduxjs/toolkit';

export const glassesSlice = createSlice({
    name: 'glasses',
    initialState: {
        status:'uploading',
        glasses:{},
        errorMessage: undefined
    },
    reducers: {
        uploadGlasses: (state, { payload }) => {
            state.status = 'uploaded';
            state.glasses = payload;
        },
        checkingGlasses: (state) => {
            state.status = 'checking';
        },
        
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
        errorUplodingGlasses: (state, { payload }) => {
            state.status = 'error';
            state.errorMessage = payload?.errorMessage;
        }
    }
});

export const { uploadGlasses, checkingGlasses,clearErrorMessage,errorUplodingGlasses } = glassesSlice.actions;