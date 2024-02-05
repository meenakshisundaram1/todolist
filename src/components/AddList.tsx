import { Grid } from '@mui/material'
import React from 'react'
import Todo from '../helper/Todo'
import { posttodo } from '../servicefile/apiservice'
import { FormData } from '../helper/Todo'
import { useNavigate } from 'react-router-dom'

const AddList = () => {

  
const navigate = useNavigate();
  const saveData =async (data:FormData)=>{
    try{
      await posttodo(data);
      console.log('Form data saved:', data);
      handleClose();
    }
    catch(errors){
      console.log(errors);
    }
  }
  const handleClose = () => {
    navigate('/')
  };
  return (
    <Grid  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background:'#4B95BD',height: "100vh"}}>
        
        <h1>ADD TODO  </h1>
        <Todo actionhandler = {(e)=>saveData(e)}/>
   
    </Grid>
   
  )
}

export default AddList


