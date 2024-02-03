import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import AddList from "./components/AddList";
import { DataProvider } from "./components/DataContext/DataContext";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <div>
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/Add" element={<AddList />}></Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/Edit" element={<EditTodo />} ></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
