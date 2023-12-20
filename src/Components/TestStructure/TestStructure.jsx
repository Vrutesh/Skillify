import { Button } from "@mui/material";

function TestStructure({
  teststructureicon,
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
      
        <div className="phases">
          <h1>{testround}</h1>
          <p className="round-info">{roundinfo}</p>
          <div className="skill-container">
          <h3>{skillcontainerheading}</h3>
          {btnheading1 && <Button variant="contained">{btnheading1}</Button>}
          {btnheading2 && <Button variant="contained">{btnheading2}</Button>}
          {btnheading3 && <Button variant="contained" >{btnheading3}</Button>}
          {btnheading4 && <Button variant="contained" >{btnheading4}</Button>}
          </div>
          <div className="round-conditions">
            <p>{conditioninfo}</p>
            <small>{marks}</small>
            <h6>{type}</h6>
          </div>
        </div>

    </>
  );
}

export default TestStructure;
