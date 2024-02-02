import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
 import AddList from "./components/AddList";

function App() {
  return (
     
      <div >
        <Header />
        <Routes>
        <Route path="/Add" element={<AddList/>}></Route>
        <Route path="/"  element={<Homepage/>}/>
        </Routes>

      </div>
    
  );
}

export default App;
