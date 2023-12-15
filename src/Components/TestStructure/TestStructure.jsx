// import { Button } from "@mui/material";
import Btn from "../../Common/Btn/Btn";

function TestStructure({
  teststructureheading,
  testround,
  roundinfo,
  skillcontainerheading,
  conditioninfo,
  marks,
  type,
}) {
  return (
    <>
      <section className="structure-container" id="test-structure">
        <h1>
          <i className="bi bi-magic"></i> {teststructureheading}
        </h1>
        <div className="phase-1 phases">
          <h1>{testround}</h1>
          <p className="round-1-info">{roundinfo}</p>
          <div className="skill-container">
            <h3>{skillcontainerheading}Topics -</h3>
            <Btn btnlabel={"HTML5"} />
            <Btn btnlabel={"CSS3"} />
            <Btn btnlabel={"Javascript"} />
            <Btn btnlabel={"React JS"} />
          </div>
          <div className="round-1-conditions">
            <p>{conditioninfo}</p>
            <small>{marks}</small>
            <h6>{type}</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestStructure;
