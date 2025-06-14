import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../slices/loginSlice"; 
import tabReducer from "../slices/tabSlice";
import { login } from "../slices/loginSlice";
import { LoginState } from "../slices/loginSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        tab: tabReducer
    }
})

let storedUser = localStorage.getItem('user');

if(storedUser) {
    let user: LoginState = JSON.parse(storedUser);
    store.dispatch(login(user))
}

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']