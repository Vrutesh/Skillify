import React from "react"
import "./Home.css"
import Homebg from "../../assets/Images/bg2.mp4"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function Home(){
    return(
        <>
         <div className="bg-container">
            <div className="overlay">
                <div className="nav-tab">
                 <h1>Skillify</h1>
                 <Link to={"/login"}><Button variant="outlined">Sign In</Button></Link>
                </div>
            <video src={Homebg} autoPlay loop muted />
                <div className="main-container">
                  <h1>Let the Quiz Begins</h1>
                 <div className="signup-field">
                 <TextField id="filled-basic" label="Email Address *" variant="filled"  sx={{width:"20rem", background:"aliceblue" }}  />
                 <Link to={"/register"}><button class="button-36">Sign Up</button></Link>
                 </div>
                 <Link to ={"/quiz"}><button class="button-37">Get Started <i class="fa-solid fa-arrow-right"></i></button></Link>
                </div>
            </div>
         </div>
        </>
    )
}

export default Home