import React, { useEffect, useState } from "react";
import Details from "./AllTodoDetails";
import { CircularProgress, Grid } from "@mui/material";
import { gettodo } from "../servicefile/apiservice";
import { makeStyles } from "tss-react/mui";


const colors = ["#8338ec", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
interface TodoItem {
  id: string;
  title: string;
  desc: string;
}
const useStyle = makeStyles()(() => ({
  centeringWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));
const Todolist = () => {
  const [loading, setLoading] = useState(true);
  const [todoData, setTodoData] = useState<TodoItem[]>([]);
  const {classes } = useStyle();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await gettodo();
        setTodoData(data);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      {loading && (
        <div className={classes.centeringWrapper}>
          <CircularProgress color="success" />
        </div>
      )}
      {!loading && (
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
              id={`${item.id}`}
            />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Todolist;
