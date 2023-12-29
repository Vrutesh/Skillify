import Btn from "../../../Common/Btn/Btn";
import Editor_R2 from "../Editor_R2";
import "./CodingRounds.css";
import AlertMsg from "../../../Common/AlertMsg/AlertMsg";

function Round_2() {
  return (
    <>
      <div className="question-container">
        <div className="question-section">
          <h3>Q. How to Centre a div ?</h3>
        </div>
        <div className="editor-part">
          <Editor_R2 />
        </div>
        <div className="run-code">
          <Btn btnlabel="Run Code" />
          <AlertMsg testlink={"/quiz/frontend-development/"} />
        </div>
      </div>
    </>
  );
}

export default Round_2;
