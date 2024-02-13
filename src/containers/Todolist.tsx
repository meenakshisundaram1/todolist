import React, { useEffect, useState } from "react";
import Details from "./AllTodoDetails";
import { CircularProgress, Grid } from "@mui/material";
import { gettodo } from "../servicefile/apiservice";
import { useStyle } from "../assests/styles";
import { useDispatch, useSelector } from "react-redux";
import { toDoListActions } from "../redux/store/slice";
import { selectAllToListData } from "../redux/store/selector";

const colors = ["#8338ec", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
interface TodoItem {
  id: string;
  title: string;
  desc: string;
}

const Todolist = () => {
  const allToListData = useSelector(selectAllToListData)
  const [loading, setLoading] = useState(true);
  const [todoData, setTodoData] = useState<TodoItem[]>([]);
  const { classes } = useStyle();
  const dispatch = useDispatch();

  const fetchdata = async () => {
    try {
      const data = await gettodo();
      dispatch(toDoListActions.setAllTodo(data));
      setTodoData(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {loading ? (
        <div className={classes.centeringWrapper}>
          <CircularProgress color="success" />
        </div>
      ) : (
        <Grid className={classes.displaygrid}>
          {(allToListData || []).map((item, index) => (
            <Details
              key={item.id}
              title={item.title}
              desc={item.desc}
              color={colors[index % 5]}
              id={item.id}
            />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Todolist;
