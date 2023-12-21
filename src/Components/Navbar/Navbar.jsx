import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../../assets/Images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "../../Common/Avatar/Avatar";
import TopScrollBar from "../../Common/MotionAnimation/TopScrollBar/TopScrollBar";
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';
import profilepic from "../../assets/Images/profilepic.png"


function Navbar() {

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

  const [quiz, setQuiz] = React.useState("");
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

  return (
    <>
      <header>
        <TopScrollBar />
        <nav className="mr" id="nav">
          <div className="nav-logo">
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="logo" />{" "}
            </Link>
          </div>
          <div className="nav-menu">
            <Link to={"/about"}>
              <Button id="basic-button" sx={{ color: "black" }}>
                About
              </Button>{" "}
            </Link>
            <Button
              id="basic-button"
              className="menu-btn"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: "black" }}
            >
              Quiz
              <i class="fa-solid fa-angle-down"></i>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onChange={handleChange}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link to={"/quiz/frontend-development"}>
                <MenuItem onClick={handleClose}>Frontend Development</MenuItem>
              </Link>
              <Link to={"/quiz/backend-development"}>
                <MenuItem onClick={handleClose}>Backend Development</MenuItem>
              </Link>
              <MenuItem onClick={handleClose} disabled>
                Full Stack Development
              </MenuItem>
            </Menu>
          </div>

          <div className="nav-auth">
            {isAuthenticated ? (
              <>
        <Button onClick={handleOpenProfile}><Avatar/></Button>
              <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openprofile}
        onClick={handleCloseProfile}
      >
        <div className="backdrop-img">
        <img src={profilepic} style={{width:"400px", height:"400px", borderRadius:"50%"}}/>
        <h2>{user.name}</h2>
        </div>
      </Backdrop>
                <Button
                  variant="text"
                  aria-controls={opent ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={opent ? "true" : undefined}
                  onClick={handleClickt}
                  sx={{ color: "black" }}
                  className="profile-tab"
                >
                  Profile
                  <KeyboardArrowDownIcon />
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
              <Button variant="contained" onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
