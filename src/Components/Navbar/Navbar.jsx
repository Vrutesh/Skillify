import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';




function Navbar(){

    const [quiz, setQuiz] = React.useState('');
    const handleChange = (event) => {
      setQuiz(event.target.value);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <>
         <header>
            <nav>
                    <div className="nav-logo">
                        <Link to={"/"}><h1>SKILLIFY</h1></Link>
                    </div>
                    <div className="nav-menu"> 
                    <Link to={"/about"}><Button
        id="basic-button" sx={{color:"black"}}
      >
        About 
        
      </Button>                               </Link>
                    <Button
        id="basic-button" className="menu-btn"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} sx={{color:"black"}}
      >
        Test 
        <i class="fa-solid fa-angle-down"></i>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onChange={handleChange}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={"/quiz/frontend-development"}><MenuItem onClick={handleClose}>Frontend Development</MenuItem></Link>
        <MenuItem onClick={handleClose}>Backend Development</MenuItem>
        <MenuItem onClick={handleClose}>Full Stack Development</MenuItem>
      </Menu>

                       
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