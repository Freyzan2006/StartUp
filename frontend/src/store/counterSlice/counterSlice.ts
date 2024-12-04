import { createSlice } from "@reduxjs/toolkit";
import { ICounter } from "./counterSlice.interface"

const initialState: ICounter = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state: ICounter) => { state.value += 1; },
        decrement: (state: ICounter) => { state.value -= 1; },
    },
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer; 