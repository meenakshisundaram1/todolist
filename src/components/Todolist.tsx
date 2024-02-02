
import React from 'react'
import { tododata } from '../helper/Tododata'
import Details from './Details';
import { Grid } from '@mui/material';
const Todolist = () => {
  return (
    <Grid style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
      {tododata.map((item, index) =>(
        <Details key={index}  title={item.title} desc={item.desc} /> ))}
      
    </Grid>
  );
}

export default Todolist