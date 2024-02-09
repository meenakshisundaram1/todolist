import { makeStyles } from "tss-react/mui";



 export const useStyle = makeStyles()(() => ({
    centeringWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    add:{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background:'#4B95BD',
      height: "100vh"
    },
    card:{
      width: 290, 
      height: 180, 
       marginTop: "30px",
       marginRight:"38px", 
       marginLeft:"45px",
       borderRadius:"10px",
       
    },
    grid:{
      display: "flex",
      flexDirection: "row",
    justifyContent: "space-between",
    },
    title:{ width: "100%", 
    fontWeight: "bolder", 
    marginLeft: "10px" 
  },
  desc:{
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
   
  },
  headercontainer:{
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background:"#010A0F", 
    color: "white",
    
  },
  circleicon:{
    color: "red", 
    fontSize: "2.3rem" 
  },
  displaygrid:{
    display: "flex",
    flexDirection:"row",
    flexWrap: "wrap",
    
    minWidth:"200px"
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
    width:"60%",
    padding:"30px",
    backgroundColor: "white",
    display:"flex",
    flexDirection:"column"

  },details:{
    margin:"30px"
  }
  }));
