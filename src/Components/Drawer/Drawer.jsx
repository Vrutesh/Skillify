import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
    openNestedList: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleNestedList = (event) => {
    event.stopPropagation();
    setState({ ...state, openNestedList: !state.openNestedList });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to={"/about"}>
          <ListItem key="About" disablePadding>
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <ListItem
          key="Quiz"
          disablePadding
          onClick={(event) => toggleNestedList(event)}
        >
          <ListItemButton>
            <ListItemText primary="Quiz" />
            {state.openNestedList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={state.openNestedList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link
              to={"/quiz/frontend-development"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Frontend Development" />
              </ListItemButton>
            </Link>
            <Link
              to={"/quiz/backend-development"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Backend Development" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
        <Divider />

    </Box>
  );

  return (
    <div>
      {[<MenuIcon fontSize="large" />].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer("right", true)}>{anchor}</Button>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
