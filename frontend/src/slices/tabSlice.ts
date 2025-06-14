import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { store } from "../store/store";
import { stat } from "fs";

export interface TabState {
    tabStates: Record<string, boolean>;
}

interface Tab {
    tab: string,
    isOpen: boolean
}

const initialState: TabState = {
    tabStates: {},
}

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        setTab: (state, action: PayloadAction<Tab>) => {
            const {tab, isOpen} = action.payload;
            state.tabStates[tab] = isOpen;
        },
        toggleTab: (state, action: PayloadAction<Tab>) => {
            const tab = action.payload.tab;
            state.tabStates[tab] = !state.tabStates[tab];
        },
        closeTab: (state, action: PayloadAction<Tab>) => {
            const {tab, isOpen} = action.payload;
            state.tabStates[tab] = isOpen;
        }
    }
})

export const { setTab, toggleTab, closeTab } = tabSlice.actions;
export default tabSlice.reducer;