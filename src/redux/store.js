import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './slices/clientSlice';
import wranglerReducer from './slices/wranglerSlice';

export default configureStore({
    reducer: {
        client: clientReducer,
        wrangler: wranglerReducer,
    },
});