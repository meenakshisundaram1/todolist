import React, { useEffect, useState } from "react";
import { useData } from "./DataContext/DataContext";
import Todo from "../helper/Todo";
import { Grid } from "@mui/material";
import { gettodobyid, puttoddobyid } from "../servicefile/apiservice";
import { useNavigate, useParams } from "react-router-dom";
import { FormData } from "../helper/Todo";
import { useStyles } from "tss-react";

const EditTodo = () => {
  const navigate = useNavigate();
  const [value, setValue]= useState<FormData>({title: '', desc: ''});
  const params = useParams();
const fetchData = async() => {
  const data = await gettodobyid(params?.id || '' );
 setValue(data)
}
useEffect(() =>{
 fetchData();
},[]);


const editdata  = async (data:any)=>{
  try{
   const editdata = await puttoddobyid(params?.id || '',data);
    console.log('Form data saved:', editdata);
    handleClose();
  }
  catch(errors){
    console.log(errors);
  }

};
const handleClose = () => {
  navigate('/')
};
  return (
    <>
    <Grid  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background:'#4B95BD',height: "100vh"}}>
      <h1>EditTodo</h1>
      <Todo values={value} actionhandler = {(e)=>editdata(e)} />
      </Grid>

    </>
  );
};

export default EditTodo;
