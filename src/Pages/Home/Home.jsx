import React from "react";
import "./Home.css";
import homeBg from "../../assets/Images/homepagebackground.mp4";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import homelogo from "../../assets/Images/homepagelogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "../../Common/Avatar/Avatar";
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';
import profilepic from "../../assets/Images/profilepic.png"

function Home() {

  const [openprofile, setOpenProfile] = React.useState(false);
  const handleCloseProfile = () => {
    setOpenProfile(false);
  };
  const handleOpenProfile = () => {
    setOpenProfile(true);
  };

  const [anchorEt, setAnchorEt] = React.useState(null);
  const opent = Boolean(anchorEt);
  const handleClickt = (event) => {
    setAnchorEt(event.currentTarget);
  };
  const handleCloset = () => {
    setAnchorEt(null);
  };


  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="bg-container">
        <div className="overlay">
          <div className="nav-tab mr">
            <img src={homelogo} alt="logo" />
           <div className="nav-log">

            {isAuthenticated ? (
              <>
        <Button onClick={handleOpenProfile}><Avatar /></Button>
              <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openprofile}
        onClick={handleCloseProfile}
      >
        <div className="backdrop-img">
        <img src={profilepic} style={{width:"400px", height:"400px", borderRadius:"50%"}}/>
        <h2 style={{color:"White"}}>{user.name}</h2>

        </div>
      </Backdrop>
                <Button
                  variant="text"
                  aria-controls={opent ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={opent ? "true" : undefined}
                  onClick={handleClickt}
                  sx={{ color: "#fff" }}
                >
                  Profile
                 
                </Button>
                
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEt}
                  open={opent}
                  onClose={handleCloset}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleCloset}>
                    <div className="profile">
                      <img src={profilepic} alt={user.name} />
                      <h2>{user.name}</h2>
                    </div>
                  </MenuItem>
                  <Divider variant="middle" />
                  <MenuItem onClick={handleCloset}>
                  
                    <Button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                          
                      })
                    }
                    >
                      Log Out
                    </Button>
                    
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button variant="outlined" onClick={() => loginWithRedirect()} sx={{height:"40px"}}>
                Sign In
              </Button>
            )}
           </div>
             
           
          </div>
          <video src={homeBg} autoPlay loop muted />
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
