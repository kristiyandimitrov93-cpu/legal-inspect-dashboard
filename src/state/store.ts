import { configureStore } from "@reduxjs/toolkit";
import { relevantCasesApi } from "../api/relevantCasesApi";
import analyticsReducer from './analytics';
import documentsReducer from './documents';

export type RootState = ReturnType<typeof store.getState>;


export const store = configureStore({
    reducer: {
        [relevantCasesApi.reducerPath]: relevantCasesApi.reducer,
        analytics: analyticsReducer,
        documents: documentsReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(relevantCasesApi.middleware),
});