import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useData } from "./DataContext/DataContext";
import { useNavigate } from "react-router-dom";
import { deletebyid } from "../servicefile/apiservice";
import { CircularProgress } from "@mui/material";

const options = ["edit", "delete"];

const ITEM_HEIGHT = 48;

const useStyle = makeStyles()(() => ({
  menu: {
    display: "flex",
    marginLeft: "auto",
  },
}));

const Details = ({id,
  title,
  desc,
  color,
}: {
  id : string;
  title: string;
  desc: string;
  color: string;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {data, setDataValue} = useData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log("the option", e);
    setAnchorEl(null);
  };
  const handleValue = () => {
    setDataValue({title, desc})
    navigate(`Edit/${id}`);

  }
  const handleDelete = async () => {
    try {
      setLoading(true); 
      await deletebyid(id);
      setLoading(false); 
      navigate("/");
    } catch (error) {
      console.log("the error is", error);
      setLoading(false); 
    }
  };
  
  const { classes } = useStyle();
 
 


  return (
    <div style={{ width: 300, height: 200, background: color, margin: "30px" }}  >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
         <div
          style={{ width: "100%", fontWeight: "bolder", marginLeft: "10px" }}
        >
          <p>{title}</p>
        </div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
         
        >
          <MoreVertIcon />
        </IconButton>
       
      </Grid>

      <Menu
      
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={ open}

        onClose={handleClose}
       
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={(e) => option === 'delete'? handleDelete() : handleValue()}
            
          
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <div style={{ marginLeft: "10px" }}>
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            // wordWrap: "break-word",
          }}
        >
          {desc}
        </p>
      </div>
      {loading && <CircularProgress style={{ position: "absolute", top: "50%", left: "50%" }} />}
    </div>
  );
};

export default Details;
