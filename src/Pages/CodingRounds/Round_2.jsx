import { Link } from "react-router-dom";
import Btn from "../../Common/Btn/Btn"
import "./Round_2.css"
function Round_2(){
    return(
        <>
          <div className="question-container">
            <div className="question-section">
                <h1>How to Centre a div ?</h1>
                <Link to={"/quiz/frontend-development/round_2/coding"}>
                <Btn btnlabel={"Start"} />
                </Link>
            </div>
          </div>
        </>
    )
}

export default Round_2