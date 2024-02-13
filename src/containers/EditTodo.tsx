import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { Grid } from "@mui/material";
import { gettodobyid, puttoddobyid } from "../servicefile/apiservice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { myForm } from "../components/Todo";
import { useStyle } from "../assests/styles";
import { useDispatch } from "react-redux";
import { toDoListActions } from "../redux/store/slice";


const EditTodo = () => {
  const navigate = useNavigate();
  const [value, setValue]= useState<myForm>({id: '',title: '', desc: ''});
  const { classes } = useStyle();
  const details = useLocation();
  const dispatch = useDispatch();
  console.log("the details",details)
  useEffect(()=>{
    setValue(details.state)
    
  },[value])

  console.log("the value",value)
//   const fetchData = async() => {
//   const data = await gettodobyid(params?.id || '' );
//  setValue(data)
// }
// useEffect(() =>{
//  fetchData();
// },[]);


const editdata  = async (data:myForm)=>{

  console.log("insde the edit",data)
   const response = await puttoddobyid( data);
   dispatch(toDoListActions.editTodo(response));
    handleClose();

};
const handleClose = () => {
  navigate('/')
};
  return (
    <>
    <Grid  className={classes.add}>
      <h1>EditTodo</h1>
      <Todo values={value} actionhandler = {(e)=>editdata(e)} />
      </Grid>

    </>
  );
};

export default EditTodo;
