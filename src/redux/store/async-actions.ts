import { createAction } from "@reduxjs/toolkit";

const deleteaction = createAction<string>('Delete_Action');

export const serviceaction ={deleteaction}