import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {notesApi} from '../features/api/apiSlice';

const store = configureStore({
    reducer:{
        [notesApi.reducerPath]: notesApi.reducer
    },

    middleware :(getDefaultMiddleware)=> 
       getDefaultMiddleware().concat(notesApi.middleware),
});

setupListeners(store.dispatch);

export default store;