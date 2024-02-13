import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { deletebyid } from "../../servicefile/apiservice";
import { toDoListActions } from "./slice";


export function* deleteTodo (action:PayloadAction<string>):any{
    try{
        const responce = yield call(deletebyid,action.payload);
        yield put(toDoListActions.deleteTodo(responce))
    }
    catch(error){
        console.log("Error",error)
    }
}
export function* deleteForever(){
    yield takeLatest(toDoListActions.deleteaction, deleteTodo);
}