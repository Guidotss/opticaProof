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
            state.glasses = {};
        },

        getAllGlasses: (state, { payload }) => {
            state.status = 'uploaded';
            state.glasses = payload;
        },
        
        findGlassesById: (state, { payload }) => {
            state.status = 'uploaded';
            state.glasses = payload;
        },
        errorUplodingGlasses: (state, { payload }) => {
            state.status = 'error';
            state.glasses = {};
            state.errorMessage = payload?.errorMessage;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }

    }
});

export const { 
    
    uploadGlasses, 
    checkingGlasses,
    clearErrorMessage,
    getAllGlasses,
    findGlassesById,
    errorUplodingGlasses

} = glassesSlice.actions;