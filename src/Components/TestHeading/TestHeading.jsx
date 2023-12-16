import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function TestHeading({ testheading, overview, testinfo, testlink }) {
  return (
    <>
      <div className="quiz-heading" id="main-container">
        <h1>{testheading}</h1>
        <h2>{overview}</h2>
        <p>{testinfo}</p>
        <Link to={testlink}>
          <Button variant="contained" sx={{ width: "160px", height: "40px" }}>
            Start Quiz
          </Button>
        </Link>
      </div>
      <div className="quiz-menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills Required</a>
          </li>
          <li>
            <a href="#test-structure">Test Structure</a>
          </li>
          <li>
            <a href="#roadmap">RoadMap</a>
          </li>
          <li>
            <a href="#faq">FAQ's</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TestHeading;
