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

export interface FormData {
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
const Todo = ({values,actionhandler}: {values?: FormData,actionhandler?: (props:any)=> any}) => {
  const { classes } = useStyle();
  const navigate = useNavigate();
  const {  register,handleSubmit,watch, formState: { errors }, setValue} = useForm<FormData>();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  };
  const handleCloses =() =>{
    navigate('/')
  }
  
  const titleValue = watch("title");
  const descValue = watch("desc");


  const onSubmit = (data: FormData) => {
    actionhandler && actionhandler(data);
  };
  console.log('error',errors.title)
  console.log('error',descValue)
  console.log('error',errors?.desc?.message)
  console.log('error',!titleValue)
  console.log('error',!descValue)
  console.log('error', !!errors.desc)
  
  console.log('the  decription value', values?.desc)
  console.log('the title value', values?.title)
  console.log('title ',!titleValue)
  console.log('desc',!descValue)
  console.log('more than 10', !!errors.desc)
  
  
  
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
    <FormGroup className={classes.formStyle}>
      <FormControl>
       
           <TextField
           InputLabelProps={{ shrink: true }}
          id="title"
          label="Title*"
          multiline
          maxRows={4}
          defaultValue={values?.title}
          error={!!errors.title && !values?.title}
          helperText={(errors.title && !values?.title) && errors.title.message}
          classes={{ root: classes.inputStyle }}
          
          {...register("title", {
            required: "Please provide a title"
        })}
        />
    
      </FormControl>
     
        <FormControl >
        
      <TextField
      InputLabelProps={{ shrink: true }}
        id="desc"
        label="Description*"
        multiline
        rows={4}
        defaultValue={values?.desc}
        error={!!errors.desc && !values?.desc}
       classes={{root:classes.inputtext}}
       helperText={ (errors.desc && !values?.desc)  &&  errors.desc.message}
      
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
          {/* <Button  type= "submit" variant="contained" color="primary" disabled={( !values?.title) || (!values?.desc)}> */}
          <Button  type= "submit" variant="contained" color="primary" disabled={(!titleValue && !values?.title) || (!descValue && !values?.desc)  ||!!errors.desc}>
            Save
          </Button>
        </FormControl>
        <FormControl className={classes.button}>
          <Button variant="contained" color="secondary" onClick={handleClickOpen}  >
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
          <Button onClick={handleCloses} autoFocus>
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
