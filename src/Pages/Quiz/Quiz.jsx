import { resultInitialState } from "../../assets/Questions/Questions";
import "./Quiz.css"
import { useState } from "react"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Quiz({questions}){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null)
    const [answer, setAnswer] = useState(null)
    const[result, setResult]=useState(resultInitialState)
    const [showResult, setShowResult] = useState(false);

   const {question, choices, correctAnswer} = questions[currentQuestion]

   const onAnswerClick=(answer, index)=>{
       setAnswerIdx(index);
       if(answer=== correctAnswer){
          setAnswer(true)
       }
       else{
        setAnswer(false)
       }
   }

   const onNext =()=>{
    setAnswerIdx(null);
    setResult((prev)=>
        answer
        ?{
         ...prev,
         score:prev.score + 1,
         correctAnswer: prev.correctAnswer +1,
        } :{
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
        }
    )

    if(currentQuestion !== questions.length - 1){
       setCurrentQuestion((prev) => prev + 1)
    }else{
        setCurrentQuestion(0);
        setShowResult(true)
    }
   }

   const tryAgain=()=>{
    setResult(resultInitialState);
    setShowResult(false);
   }
    return(
        <>
        <div className="quiz-container">
        <div className="quiz-container2">
            {!showResult ? (<>
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question">/{questions.length}</span>
            <h2 className="question-heading">{question}</h2>
            <ul className="list">
                {
                   choices.map((answer, index) => (
                    <li 
                    onClick={()=> onAnswerClick(answer, index)}
                    key={answer}
                    className={answerIdx === index ? 'selected-answer' : null}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
            <div className="footer">
            <Button
                variant="contained"
                onClick={onNext} disabled={answerIdx === null}>
               
                    {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            <Link to={"/about"}>
                <button className="exit-btn">Exit Quiz</button>
            </Link>
            
            
            </div>
             </>) : <div className="display-result">
                <h3>Result</h3>
                <div className="result">
                <p>Total Questions : <span>{questions.length}</span></p>
                <p>Total Score : <span>{result.score}</span></p>
                </div>
                <p className="correct-answer">Correct Answer : <span>{result.correctAnswer}</span></p>
                <p className="wrong-answer">Wrong Answer : <span>{result.wrongAnswers}</span></p>
               
               <div className="result-btn">
                <Button
                variant="contained"
                onClick={tryAgain}
                className="tryagain-btn"
              >
               Try Again
              </Button>
                <Link to={"/about"}><Button
                variant="contained"
                
              >
                Back to About Page
              </Button></Link>
               </div>
                </div>}
             
        </div>
        </div>
       
        
        </>
    )
}

export default Quiz