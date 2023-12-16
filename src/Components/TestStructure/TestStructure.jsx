import { Button } from "@mui/material";

function TestStructure({
  teststructureheading,
  testround,
  roundinfo,
  skillcontainerheading,
  conditioninfo,
  marks,
  type,
  btnheading1,
  btnheading2,
  btnheading3,
  btnheading4,
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
            <Button variant="contained">{btnheading1}</Button>
            <Button variant="contained">{btnheading2}</Button>
            <Button variant="contained">{btnheading3}</Button>
            <Button variant="contained">{btnheading4}</Button>
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
