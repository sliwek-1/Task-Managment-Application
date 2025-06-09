import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { store } from "../store/store";

export interface LoginState {
    name: string;
    surrname: string;
    login: string;
    email: string;
    uniqueId: string
}

const initialState: LoginState = {
    name: "",
    surrname: "",
    login: "",
    email: "",
    uniqueId: "",
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginState>) => {
            state.name = action.payload.name;
            state.surrname = action.payload.surrname;
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.uniqueId = action.payload.uniqueId;
        },
        logout: (state) => {
            state.name = "";
            state.surrname = "";
            state.login = "";
            state.email = "";
            state.uniqueId = "";
        }
    }
})

export const { login } = loginSlice.actions;
export default loginSlice.reducer;