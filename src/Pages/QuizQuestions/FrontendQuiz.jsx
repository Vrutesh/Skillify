import { resultInitialState } from "../../assets/Questions/Questions";
import "./Quiz.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AlertMsg from "../../Common/AlertMsg/AlertMsg";
import Btn from "../../Common/Btn/Btn";

function FrontendQuiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer, qualify } =
    questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswer: prev.correctAnswer + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
    if (result.score > 0) {
      setRedirectToPath("/about");
    }
  };

  const tryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };

  const resultInfoContent =
    result.correctAnswer < 20
      ? "You are Not Qualified for the next Round 😔"
      : "Woo hoo 🤩! You are Qualified for the next Round";

  return (
    <>
      <div className="quiz-section">
        <div className="quiz-container">
          {!showResult ? (
            <>
              <div className="score-tab">
                <span className="active-question-no">
                  {currentQuestion + 1}
                  <span className="total-question">/{questions.length}</span>
                </span>
                <p className="active-score">
                  <h5>Score :-</h5>{" "}
                  <span className="active-correctanswer">
                    {result.correctAnswer}
                  </span>
                  <span className="totalquestion-tab">/{questions.length}</span>
                </p>
              </div>
              <h2 className="question-heading">{question}</h2>
              <ul className="list">
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerClick(answer, index)}
                    key={answer}
                    className={answerIdx === index ? "selected-answer" : null}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="footer">
                <Button
                  variant="contained"
                  onClick={onNext}
                  disabled={answerIdx === null}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </Button>
                <AlertMsg testlink={"/quiz/frontend-development"} />
              </div>
            </>
          ) : (
            <div className="display-result">
              <h3>Result</h3>
              <div className="result">
                <p>
                  Total Questions : <span>{questions.length}</span>
                </p>
                <p>
                  Total Score : <span>{result.score}</span>
                </p>
              </div>
              <p className="correct-answer">
                Correct Answer : <span>{result.correctAnswer}</span>
              </p>
              <p className="wrong-answer">
                Wrong Answer : <span>{result.wrongAnswers}</span>
              </p>
              <p className="result-info">Status : {resultInfoContent}</p>

              <div className="result-btn">
                <Btn
                  onClick={tryAgain}
                  className="tryagain-btn"
                  btnlabel={"Try Again"}
                />
                <Link to={"/quiz/frontend-development/round_2"}>
                <Button
                  variant="contained"
                  className="nextround-btn"
                  disabled={result.correctAnswer < 0}
                >
                  Next Round
                </Button>
                </Link>
                <Link to={"/quiz/frontend-development"}>
                  <Btn btnlabel={"Back to Quiz Page"} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FrontendQuiz;
