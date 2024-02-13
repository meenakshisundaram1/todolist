import { configureStore } from "@reduxjs/toolkit";
import {  todoReducer } from "./redux/store/slice";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./redux/store/rootsaga";

const sagaMiddleware = createSagaMiddleware();
const middleware =[sagaMiddleware];
const store = configureStore({
    reducer:{
        todoReducer,
       
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});
sagaMiddleware.run(rootsaga)
export default store;
export type RootState = ReturnType<typeof store.getState>;