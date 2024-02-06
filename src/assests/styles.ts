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
       margin: "15px", 
       borderRadius:"10px"
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
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  }));
