import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import Sidebar from "./components/Sidebar";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolboxProvider";
import Login from "./components/Login";
import Register from "./components/Register";

function HomePage() {
  const { id } = useParams();
  return (
    <BoardProvider canvasId={id}>
      <ToolboxProvider>
        <div className="app-container">
          <Toolbar />
          <Board id={id}/>
          <Toolbox />
          <Sidebar /> 
        </div>
      </ToolboxProvider>
    </BoardProvider>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
