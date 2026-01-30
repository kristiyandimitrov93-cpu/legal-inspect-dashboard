import { configureStore } from "@reduxjs/toolkit";
import { relevantCasesApi } from "../api/relevantCasesApi";

export const store = configureStore({
    reducer: {
        [relevantCasesApi.reducerPath]: relevantCasesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(relevantCasesApi.middleware),
});