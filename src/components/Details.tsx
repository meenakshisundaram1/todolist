import IconButton from "@mui/material/IconButton";
import React from "react";
import { makeStyles } from "tss-react/mui";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const options = ["edit", "delete"];

const ITEM_HEIGHT = 48;

const useStyle = makeStyles()(() => ({
  menu: {
    display: "flex",
    marginLeft: "auto",
  },
}));

const Details = ({ title, desc }: { title: string; desc: string }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log("the option", e);
    setAnchorEl(null);
  };
  const { classes } = useStyle();

  return (
    <div
      style={{ width: 300, height: 200, background: "green", margin: "30px" }}
    >
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
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
            selected={option === "Pyxis"}
            onClick={(e) => handleClose(e)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <div style={{ width: "100%", fontWeight: "bolder", marginLeft: "10px" }}>
        <p>{title}</p>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            wordWrap: "break-word",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Details;
