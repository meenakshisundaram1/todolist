import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStyle } from "../assests/styles";

export interface myForm{
  id: string,
  title: string,
  desc: string
};

const Todo = ({
  values,
  actionhandler,
}: {
  values?: myForm;
  actionhandler?: (props: any) => any;
}) => {
  const { classes } = useStyle();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm<myForm>();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloses = () => {
    navigate("/");
  };

  const titleValue = watch("title");
  const descValue = watch("desc");

  const onSubmit = (data: myForm) => {
    console.log("data inside the form", data);
    actionhandler && actionhandler({...data,id:values?.id});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextField
        InputLabelProps={{ shrink: !!titleValue || !!values?.title }}
        id="title"
        label="Title*"
        multiline
        maxRows={4}
        defaultValue={values?.title}
        error={!!errors.title}
        helperText={errors.title && errors.title.message}
        classes={{ root: classes.inputStyle }}
        {...register("title", {
          required: "Please provide a title",
          maxLength: {
            value: 25,
            message: "the maxlenght of title is 25",
          },
        })}
      />

      <TextField
        InputLabelProps={{ shrink: !!descValue || !!values?.desc }}
        id="desc"
        label="Description*"
        multiline
        rows={4}
        defaultValue={values?.desc}
        error={!!errors.desc}
        classes={{ root: classes.inputtext }}
        helperText={errors.desc && errors.desc.message}
        {...register("desc", {
          required: "Please provide a description",
          maxLength: {
            value: 1000,
            message: "The max length of description is 1000",
          },
        })}
      />

      <Grid className={classes.buttonContainer}>
        <Grid className={classes.button}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!titleValue || !descValue || !isDirty}
          >
            Save
          </Button>
        </Grid>
        <Grid className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
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
        </Grid>
      </Grid>
    </form>
  );
};

export default Todo;
