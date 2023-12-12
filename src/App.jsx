import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Quiz from "./Pages/Quiz/Quiz";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<><Navbar /><Login /></>}/>
            <Route path="/register" element={<><Navbar/><Register /></>} />
            <Route path="/quiz" element={<><Navbar/><Quiz /></>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
