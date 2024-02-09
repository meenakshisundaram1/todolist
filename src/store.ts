import { configureStore } from "@reduxjs/toolkit";
import {  todoReducer } from "./redux/store/slice";
// import { todoreducer } from "./redux/store/slice";

const store = configureStore({
    reducer:{
        todoReducer
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;