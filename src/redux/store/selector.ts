
import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state:RootState) => state?.todoReducer

export const selectAllToListData = createSelector([selectDomain],todo=>todo.todoList)
// export const afterEditing = createSelector([selectDomain],todo=>todo.todoData)