import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { posttodo } from "../servicefile/apiservice";

interface FormData {
    title: string;
    desc: string;
  }

const useStyle = makeStyles()(() => ({
  formStyle: {
    width: "70%",
    height: "400px",
    justifyContent: "center",
    margin: "auto",
    backgroundColor: "white",
  },
  inputStyle: {
    padding: "10px",
  },
  buttonContainer: {
    display: "flex",

   
    
    justifyContent: "flex-end",
    
  },
  button: {
    padding: "10px",
  },
  inputtext: {
    padding: "10px",
    margin: "15px",
  },
  form:{
    width:"70%"

  }
}));
const Todo = ({values}: {values?: FormData}) => {
  const { classes } = useStyle();
  const navigate = useNavigate();
  const {  register,handleSubmit,watch, formState: { errors }, setValue} = useForm<FormData>();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/')
  };
  
  const titleValue = watch("title");
  const descValue = watch("desc");

  
    const saveData =async (data:FormData)=>{
      try{
        await posttodo(data);
        console.log('Form data saved:', data);
        handleClose();
      }
      catch(errors){
        console.log(errors);
      }
    }
  

  const onSubmit = (data: FormData) => {
    saveData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
    <FormGroup className={classes.formStyle}>
      <FormControl>
       
           <TextField
          id="title"
          label="title"
          multiline
          maxRows={4}
          error={!!errors.title}
          helperText={errors.title&&errors.title.message}
          classes={{ root: classes.inputStyle }}
          defaultValue={values?.title}
          {...register("title", {
            required: "Please provide a title"
        })}
        />
    
      </FormControl>
     
        <FormControl >
        
      <TextField
        id="desc"
        label="Description"
        multiline
        rows={4}
        error={!!errors.desc}
       classes={{root:classes.inputtext}}
       helperText={ errors.desc && errors.desc.message}
       defaultValue={values?.desc}
         {...register("desc", {
                            required: "Please provide a description",
                            maxLength: {
                                value: 10,
                                message: "The max length of description is 10",
                            }
                        })}
       />
      </FormControl>
      <div className={classes.buttonContainer}>
        <FormControl className={classes.button}>
          <Button  type= "submit" variant="contained" color="primary" disabled={!titleValue ||!descValue || !!errors.desc}>
            {" "}
            Save
          </Button>
        </FormControl>
        <FormControl className={classes.button}>
          <Button variant="contained" color="secondary" onClick={handleClickOpen}  >
            {" "}
            Cancel
          </Button>

          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
           >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure You Want to Cancel"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>NO</Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  
        </FormControl>
      </div>
    </FormGroup>
    </form>
  );
};

export default Todo;
