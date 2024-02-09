import React from "react";

import "./App.css";
import Header from "./containers/Header";

import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./containers/Homepage";
import AddList from "./containers/AddList";

import EditTodo from "./containers/EditTodo";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/Add" element={<AddList />}></Route>
          <Route path="/home" element={<Homepage />} />
          <Route path="/Edit" element={<EditTodo />} ></Route>
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
    </div>
  );
}

export default App;
