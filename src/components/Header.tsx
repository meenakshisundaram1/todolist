import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from "tss-react/mui";

const useStyle = makeStyles()(() => ({
  popper: {
    background: "blue",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const  {classes } = useStyle();
  const isRootPath = location.pathname === "/home";

  return (
    <div className="header-container">
      <Typography variant="h3">TODO</Typography>
      {isRootPath && (
        <Tooltip title="CreateNote"  arrow  >
          <Button onClick={() => navigate("Add")}>
            <AddCircleIcon sx={{ color: "red", fontSize: "2.3rem" }} />
          </Button>
        </Tooltip>
      )}
    </div>
  );
};

export default Header;
