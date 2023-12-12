import "./Login.css"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import Link from '@mui/material/Link';
function Login(){
    return(
        <>
           <div className="container">
            <div className="sign-in-container">
                <div className="heading">
                    <span>
                        <LockOpenIcon sx={{width:"40px", height: "40px", color:"white"}}/>
                    </span>
                    <h1>Sign In</h1>
                </div>
                <div className="input-field">
                <TextField id="outlined-basic" label="Email Address" variant="outlined" sx={{ width: "22rem" }} />
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ width: "22rem" }} />
                </div>
                <div className="checkbox">
                <FormControlLabel control={<Checkbox/>} label="Remember me" />
                </div>
                <div className="btn-container">
                <Button variant="contained"  sx={{ width: "22rem" }}>Sign In</Button>
                </div>
                <div className="account">
                    <p>
                    <Link href="#">Forgot password</Link>
                    <Link href="/register">Don't have an account? Sign Up</Link>
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
    )
}

export default Login