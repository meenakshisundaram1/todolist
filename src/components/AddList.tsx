import { Grid } from '@mui/material'
import React from 'react'
import Todo from '../helper/Todo'

const AddList = () => {
  return (
    <Grid  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background:'#4B95BD',height: "500px"}}>
        
        <h1>ADD TODO  </h1>
        <Todo></Todo>
   
    </Grid>
   
  )
}

export default AddList