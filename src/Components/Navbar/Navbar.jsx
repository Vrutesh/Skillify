import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function Navbar(){

    const [quiz, setQuiz] = React.useState('');
    const handleChange = (event) => {
      setQuiz(event.target.value);
    };

    return(
        <>
         <header>
            <nav>
                    <div className="nav-logo">
                        <Link to={"/"}><h1>SKILLIFY</h1></Link>
                    </div>
                    <div className="nav-menu">
                    
                            
                                
       <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{width:"200px"}}>Test</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={quiz}
          onChange={handleChange}
          autoWidth
          label="Quiz"
        >
            <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"FrontendDevelopment"}><Link to={"/quiz"}>Frontend Development</Link></MenuItem>
          
         
        </Select>
      </FormControl>

                       
                    </div>
                    <div className="nav-auth">
                    <Link to={"/login"}><Button variant="contained">Login</Button></Link>
                    <Link to={"/register"}><Button variant="outlined">Register</Button></Link>
                    </div>
            </nav>
         </header>
        </>
    )
}

export default Navbar;