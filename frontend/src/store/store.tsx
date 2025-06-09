import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../slices/loginSlice"; 
import { login } from "../slices/loginSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']