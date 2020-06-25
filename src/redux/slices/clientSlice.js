import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import liq from '../../assets/apis/locationIQ.json';

export const clientSlice = createSlice({
    name:'client',
    initialState: {
        clientCoordinates: [6.927079, 79.861244],
        currentResults: [],
        currentWrangler: null, //Document this addition in the wiki
        autocomplete: {
            timer:null,
            text:null,
            list:[], // Document this
            predictionLoading:false // Document this
        },
        map: {
            boundingBox:null
        }
    },
    reducers: {
        coordinateUpdate: (state,action) => {
            state.clientCoordinates = action.payload;
        },
        resultUpdate: (state,action) => {
            state.currentResults = action.payload;
        },
        wranglerUpdate: (state,action) => {
            state.currentWrangler = action.payload;
        },
        predictionText: (state,action) => {
            state.autocomplete.text = action.payload
        },
        predictionList: (state,action) => {
            state.autocomplete.list = action.payload;
        },
        predictionStatus: (state,action) => {
            state.predictionLoading = action.payload;
        },
        mapBoundingBox: (state,action) => {
            state.map.boundingBox = action.payload;
        }
    }
});

export const {
    coordinateUpdate, 
    resultUpdate, 
    currentWrangler,
    predictionText,
    predictionList,
    predictionStatus,
    mapBoundingBox
} = clientSlice.actions;

// thunks
export const predictionsFetch = value => async dispatch => {
    const list = await Axios({
        url:`${liq.endpoints.autocomplete.replace(/TOKEN/,liq.token)}=${value}`
    })
    dispatch(predictionList(list.data))
}

// selectors
export const selectCoords = state => state.client.clientCoordinates;
export const selectPredText = state => state.client.autocomplete.text; 
export const selectPredList = state => state.client.autocomplete.list;
export const selectMapBound = state => state.client.map.boundingBox;
export const selectResults = state => state.client.currentResults;
export default clientSlice.reducer;