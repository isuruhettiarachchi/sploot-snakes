import { createSlice } from '@reduxjs/toolkit';

export const clientSlice = createSlice({
    name:'client',
    initialState: {
        clientCoordinates: new Array(2),
        currentResults: [],
        currentWrangler: null, //Document this addition in the wiki
    },
    reducers: {
        coordinateUpdate: (state,action) => {
            state.clientCoordinates += action.payload;
        },
        resultUpdate: (state,action) => {
            state.currentResults += action.payload;
        },
        wranglerUpdate: (state,action) => {
            state.currentWrangler += action.payload;
        }
    }
});

export const {coordinateUpdate, resultUpdate, currentWrangler} = clientSlice.actions;

export default clientSlice.reducer;