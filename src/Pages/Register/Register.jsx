import React from "react";
import "./Register.css";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";

function Register() {
  return (
    <>
      <div className="content">
        <div className="sign-up-container">
          <div className="sign-up-heading">
            <span>
              <PersonIcon
                sx={{ width: "40px", height: "40px", color: "white" }}
              />
            </span>
            <h1>Sign Up</h1>
          </div>
          <div className="signup-input-field">
            <TextField
              id="outlined-basic"
              label="First name *"
              variant="outlined"
              sx={{ width: "11rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Last name *"
              variant="outlined"
              sx={{ width: "11rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Email Address *"
              variant="outlined"
              sx={{ width: "23.2rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Password *"
              variant="outlined"
              sx={{ width: "23.2rem" }}
            />
          </div>

          <div className="btn-content">
            <Button variant="contained" sx={{ width: "23.2rem" }}>
              Sign Up
            </Button>
          </div>
          <div className="sign-up-account">
            <p>
              <Link href="/login">Already have an account? Sign in</Link>
            </p>
          </div>
          <div className="copyrights">
            <small>
              Copyright © <Link href="/">Skillify</Link> 2023.
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
