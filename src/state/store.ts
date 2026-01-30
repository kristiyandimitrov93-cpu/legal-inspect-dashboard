import { configureStore } from "@reduxjs/toolkit";
import { relevantCasesApi } from "../api/relevantCasesApi";
import analyticsReducer from './analytics';


export type RootState = ReturnType<typeof store.getState>;


export const store = configureStore({
    reducer: {
        [relevantCasesApi.reducerPath]: relevantCasesApi.reducer,
        analytics: analyticsReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(relevantCasesApi.middleware),
});