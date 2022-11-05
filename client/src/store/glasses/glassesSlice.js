import { createSlice } from '@reduxjs/toolkit';

export const glassesSlice = createSlice({
    name: 'glasses',
    initialState: {
        status:undefined,
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

        errorUplodingGlasses: (state, { payload }) => {
            state.status = 'error';
            state.glasses = {};
            state.errorMessage = payload?.errorMessage;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
        findGlassesById: (state, { payload }) => {
            state.glasses = payload;
        }

    }
});

export const { uploadGlasses, checkingGlasses,clearErrorMessage,errorUplodingGlasses } = glassesSlice.actions;