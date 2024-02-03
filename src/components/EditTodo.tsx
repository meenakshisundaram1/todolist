import React from "react";
import { useData } from "./DataContext/DataContext";
import Todo from "../helper/Todo";
import { Grid } from "@mui/material";

const EditTodo = () => {
  const { data, setDataValue } = useData();
//   const[data,setdata] = usestate()
//   if(data){
//     setdata(data);
//   }
  console.log(data);
  return (
    <>
    <Grid  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background:'#4B95BD',height: "100vh"}}>
      <h1>EditTodo</h1>
      <Todo values={data} />
      </Grid>

    </>
  );
};

export default EditTodo;
