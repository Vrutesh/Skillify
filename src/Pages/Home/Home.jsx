import React from "react";
import "./Home.css";
import Homebg from "../../assets/Images/bg2.mp4";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import homelogo from "../../assets/Images/homepagelogo.png";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="bg-container">
        <div className="overlay">
          <div className="nav-tab mr">
            <img src={homelogo} alt="logo" />
              <Button variant="outlined" onClick={() => loginWithRedirect()} sx={{height:"40px"}}>
                Sign In
              </Button>
           
          </div>
          <video src={Homebg} autoPlay loop muted />
          <div className="main-container">
            <h1>Let the Quiz Begins</h1>
            <p>Elevate Today, Conquer Tomorrow !</p>
            <div className="signup-field">
              <TextField
                id="filled-basic"
                className="input-field"
                label="Email Address *"
                variant="filled"
                sx={{
                  background: "aliceblue",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              />
              <button class="button-36" onClick={() => loginWithRedirect()}>
                Sign Up
              </button>
            </div>
            <Link to={"/about"}>
              <button class="button-37">
                Get Started <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
