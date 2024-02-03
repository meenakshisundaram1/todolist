import IconButton from "@mui/material/IconButton";
import React from "react";
import { makeStyles } from "tss-react/mui";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useData } from "./DataContext/DataContext";
import { useNavigate } from "react-router-dom";

const options = ["edit", "delete"];

const ITEM_HEIGHT = 48;

const useStyle = makeStyles()(() => ({
  menu: {
    display: "flex",
    marginLeft: "auto",
  },
}));

const Details = ({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: string;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [hovered, setHovered] = React.useState(false);
  const open = Boolean(anchorEl);
  const {data, setDataValue} = useData();
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log("the option", e);
    setAnchorEl(null);
  };
  const handleValue = () => {
    setDataValue({title, desc})
    navigate('Edit');

  }
  const { classes } = useStyle();
 
  const onmouseenter = () => {
    setHovered(true);
  };

  const onmouseleave = () => {
    setHovered(false);
  };


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
            onClick={(e) => option === 'delete'? handleClose(e) : handleValue()}
            
          
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
    </div>
  );
};

export default Details;
