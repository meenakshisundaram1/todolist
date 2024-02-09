import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { createAction, createSelector } from "@reduxjs/toolkit";
import { ITodointialstate } from "../../Modals/types";

const selectDomain = (state:RootState) => state?.todoReducer

export const selectAllToListData = createSelector([selectDomain],todos=>todos.todoList)