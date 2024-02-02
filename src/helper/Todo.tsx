import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "tss-react/mui";

interface FormData {
    title: string;
    description: string;
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
const Todo = () => {
  const { classes } = useStyle();
  const {  register,handleSubmit, formState: { errors }} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
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
          {...register("title", {
            required: "Please provide a title"
        })}
        />
    
      </FormControl>
     
        <FormControl >
        
      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        error={!!errors.description}
       classes={{root:classes.inputtext}}
       helperText={ errors.description && errors.description.message}
       
         {...register("description", {
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
          <Button  type= "submit" variant="contained" color="primary">
            {" "}
            Save
          </Button>
        </FormControl>
        <FormControl className={classes.button}>
          <Button variant="contained" color="secondary">
            {" "}
            Cancel
          </Button>
        </FormControl>
      </div>
    </FormGroup>
    </form>
  );
};

export default Todo;
