import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { todo } from "../../types/types";
import { ITodo, ITodointialstate } from "../../Modals/types";
import { serviceaction } from "./async-actions";

const initialState:ITodointialstate = {
  todoList: [],
  todoData: {
    id: "",
    title: "",
    desc: "",
  },
  response:{}
};
const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers:{
    
    setAllTodo:(state,action:PayloadAction<ITodo[]>)=>{
      state.todoList = action.payload;

    },
    editTodo:(state,action:PayloadAction<ITodo>)=>{
        const index = state.todoList.findIndex((t:ITodo) => t.id === action.payload.id);
        if(index!== -1){
            state.todoList[index] = action.payload;
        }

    },
    deleteTodo:(state,action:PayloadAction<any >)=>{
        state.response = action.payload;
    }


    
  

   
    
  }

});
 export const toDoListActions = {...todoslice.actions,...serviceaction}
//  export const {getAllTodo, editTodo,testReducer} = todoslice.actions
//  export const {getAllTodo, editTodo, deleteTodo,testReducer} = todoslice.actions
 export const {reducer:todoReducer} = todoslice


//  console.log('TEST-->',testReducer());
