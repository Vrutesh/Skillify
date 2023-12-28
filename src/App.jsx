import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import FrontendQuiz from "./Pages/QuizQuestions/FrontendQuiz";
import BackendQuiz from "./Pages/QuizQuestions/BackendQuiz";
import { jsQuizz } from "./assets/Questions/Questions";
import { jsQuizzBackend } from "./assets/Questions/BackendQuestion";
import Footer from "./Components/Footer/Footer";
import Frontend from "./Pages/Quizzes/Frontend/Frontend";
import Backend from "./Pages/Quizzes/Backend/Backend";
import Round_2 from "./Pages/CodingRounds/Round_2";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/quiz/frontend-development"
              element={
                <>
                  <Navbar />
                  <Frontend />
                  <Footer />
                </>
              }
            />
            <Route
              path="/quiz/backend-development"
              element={
                <>
                  <Navbar />
                  <Backend />
                  <Footer />
                </>
              }
            />
            <Route
              path="/quiz/frontend-development/questions"
              element={
                <>
                  <FrontendQuiz questions={jsQuizz.questions} />
                </>
              }
            />
            <Route
              path="/quiz/backend-development/questions"
              element={
                <>
                  <BackendQuiz
                    backendquestions={jsQuizzBackend.backendquestions}
                  />
                </>
              }
            />
             <Route
              path="/quiz/frontend-development/round_2"
              element={
                <>
                  <Round_2
                  />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
