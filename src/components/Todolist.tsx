import React from "react";
import { tododata } from "../helper/Tododata";
import Details from "./AllTodoDetails";
import { Grid } from "@mui/material";

const colors = ["#8338ec", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
const Todolist = () => {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {tododata.map((item, index) => (
        <Details
          key={index}
          title={item.title}
          desc={item.desc}
          color={colors[index % 5]}
        />
      ))}
    </Grid>
  );
};

export default Todolist;
