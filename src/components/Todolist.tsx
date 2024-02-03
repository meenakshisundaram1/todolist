import React, { useEffect, useState } from "react";
import Details from "./AllTodoDetails";
import { Grid } from "@mui/material";
import { gettodo } from "../servicefile/apiservice";

const colors = ["#8338ec", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
interface TodoItem {
  id: string;
  title: string;
  desc: string;
}
const Todolist = () => {
  const [todoData, setTodoData] = useState<TodoItem[]>([]);

  useEffect(()=>{
    const fetchdata =async ()=>{
      try{
        const data = await gettodo();
        setTodoData(data);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchdata()

  },[]);
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {todoData.map((item, index) => (
        <Details
          key={item.id}
          title={item.title}
          desc={item.desc}
          color={colors[index % 5]}
        />
      ))}
    </Grid>
  );
};

export default Todolist;
