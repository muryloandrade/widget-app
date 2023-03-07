import { configureStore } from "@reduxjs/toolkit";
import { widgetApi } from "./services/widget";

const store = configureStore({
    reducer: {
        [widgetApi.reducerPath]: widgetApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(widgetApi.middleware),
});


export default store
