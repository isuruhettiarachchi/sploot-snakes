import { createSlice } from '@reduxjs/toolkit';

export const wranglerSlice = createSlice({
    name:'wrangler',
    initialState: {
        profile: {
            general: {
                name: null,
                nic: null,
                profilePicture: null,
            },
            contact: {
                primary:null,
                alternative:[],
                social:{
                    facebook:null
                },
            },
            baseLocation: {
                coords:new Array(2),
                text: null,
            },
            fees: {
                hourlyRate: null,
                perKmRate: null,
            },
        },
        dashboard: {
            status: {
                availability: false,
                showContactsWhenUnavailable: false,
            }
        }
    },
    reducers: {
        profileUpdate: (state,action) => {
            state.profile += action.payload;
        },
        dashStatusUpdate: (state,action) => {
            state.dashboard.status += action.payload;
        }
    }
});

export const {profileUpdate, dashStatusUpdate} = wranglerSlice.actions;

export default wranglerSlice.reducer;