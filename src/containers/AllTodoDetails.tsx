import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { deletebyid } from "../servicefile/apiservice";
import { Button,  Card,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useStyle } from "../assests/styles";

const options = ["edit", "delete"];

const ITEM_HEIGHT = 48;


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
  const [hover, setHover] = useState(false);
  const [DeleteOption, setDeleteOption] = useState<boolean>(false)
  const navigate = useNavigate();
 
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
        setAnchorEl(null);
        setDeleteOption(false)
    };
  const handleValue = () => {
    navigate(`/Edit/${id}`);

  }
  const handleDelete = async () => {
    setDeleteOption(true);
   };
  const Deletetodo = async () => {
    try {
      deletebyid(id);
    setAnchorEl(null);
    setDeleteOption(false)
    navigate("/");
}
catch (error) {
     console.log("the error is", error);
      
    }
};
  
const { classes } = useStyle();
 
 


  return (
    <Card className={ classes.card} style ={{background: color}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Grid
        className={ classes.grid }
      >
         <div
          className={classes.title}
        >
          <p>{title}</p>
        </div>
        {hover && <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
         
        >
          <MoreVertIcon />
        </IconButton>
        
        }
        
       
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
          className={classes.desc}
        >
          {desc}
        </p>
      </div>
      {DeleteOption &&
                    <Dialog
        
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Confirmation"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to delete this todo card
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                No
                            </Button>
                            <Button onClick={Deletetodo} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
}
    </Card>
  );
};

export default Details;
