import { Grid } from '@mui/material'
import React from 'react'
import Todo from '../components/Todo'
import { posttodo } from '../servicefile/apiservice'
import { myForm } from '../components/Todo'
import { useNavigate } from 'react-router-dom'
import { useStyle } from '../assests/styles'

const AddList = () => {

  const {classes } = useStyle();
const navigate = useNavigate();
  const saveData =async (data:myForm)=>{
      await posttodo(data);
      handleClose();
  }
  const handleClose = () => {
    navigate('/')
  };
  return (
    <Grid  className={classes.add}>
        
        <h1>ADD TODO  </h1>
        <Todo actionhandler = {(e)=>saveData(e)}/>
   
    </Grid>
   
  )
}

export default AddList


