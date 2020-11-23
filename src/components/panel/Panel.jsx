import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import BrushIcon from "@material-ui/icons/Brush";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  ln: {
    color: "#3f51b5",
    textDecoration: "none",
  },
  menuMain: {
    backgroundColor: "#1f1f1f",
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
    flexDirection: "column",
  },
  gen: {
    width: 25,
  },
});

export default function Panel(props) {
  // const menuType = useSelector((state) => state.books.menuType);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        <ListItem button key="Starred">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
      </List>
      <Divider /> */}
      <div className={classes.menuMain}>
        <div className={classes.items}>
          <List>
            <NavLink
              className={classes.ln}
              to="/Genius"
              activeClassName={"ln_active"}
              // onClick={() => {
              //   dispatch(addBooks());
              // }}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <HomeIcon color="primary"></HomeIcon>
                  {/* <img
                    className={classes.gen}
                    src="https://savemusic.me/uploads/cover/artist/ffd9392b39d6af001961cb83ba4a2fd5.jpg"
                    alt=""
                  /> */}
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </NavLink>
          </List>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.menu}>
      <MenuIcon onClick={toggleDrawer("left", true)} />
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
