import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useStyle } from "../assests/styles";



const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const  {classes } = useStyle();
  const isRootPath = location.pathname === "/home";

  return (
    <Grid className={classes.headercontainer}>
      <Typography variant="h3">TODO</Typography>
      {isRootPath && (
        <Tooltip title="CreateNote"  arrow  >
          <Button onClick={() => navigate("Add")}>
            <AddCircleIcon className={classes.circleicon} />
          </Button>
        </Tooltip>
      )}
    </Grid>
  );
};

export default Header;
