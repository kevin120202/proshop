import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./slices/apiSlice"

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddelware) => getDefaultMiddelware().concat(apiSlice.middleware),
    devTools: true
})

export default store