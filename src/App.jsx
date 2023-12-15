import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import Quiz from "./Pages/Quiz/Quiz"
import {jsQuizz} from "./assets/Questions/Questions"
import { jsQuizzBackend } from "./assets/Questions/BackendQuestion";
import Footer from "./Components/Footer/Footer";
import Frontend from "./Pages/Quizzes/Frontend/Frontend";
import Backend from "./Pages/Quizzes/Backend/Backend";




function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<><Navbar /><Login /></>}/>
            <Route path="/register" element={<><Navbar/><Register /></>} />
            <Route path="/about" element={<><Navbar/><About /><Footer/></>} />
            <Route path="/quiz/frontend-development" element={<><Navbar/><Frontend /><Footer/></>} />
            <Route path="/quiz/backend-development" element={<><Navbar/><Backend /><Footer/></>} />
            <Route path="/quiz/frontend-development/questions" element={<><Quiz questions={jsQuizz.questions}/></>} />
            <Route path="/quiz/backend-development/questions" element={<><Backend backendquestions={jsQuizzBackend.backendquestions}/></>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
