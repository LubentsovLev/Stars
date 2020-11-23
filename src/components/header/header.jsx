import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Panel from "../panel/Panel";
import { NavLink, Redirect } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { Input } from "@material-ui/core";
import s from "./header.module.scss";
import { Field, reduxForm } from "redux-form";
import { Favorite } from "@material-ui/icons";
import { addPlanetsPhotos } from "../../redux/planets_reducer";
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const Header = (props) => {
  const useStyles = makeStyles((theme) => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      zIndex: 1000,
      // pointerEvents: "none",
      cursor: "pointer",
      paddingRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      // color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    root: {
      //   flexGrow: 1,
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#cd6dff",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      maxWidth: "300px",
      fontSize: "14px",
      minWidth: "80px",
    },
    hI: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cart: {
      // color: "#fff",
    },
    searchInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // color: "#fff",
    },
    mainHeader: {
      backgroundColor: "#4a6498",
    },
    maingenius: {
      backgroundColor: "#000",
    },
    img: {
      width: 25,
    },
    genPanel: {
      marginLeft: "-25px",
      opacity: 0,
    },
  }));
  const classes = useStyles();
  let dispatch = useDispatch();
  const [red, setred] = React.useState(false);
  // const query = useSelector((state) => state.genius.query);
  React.useEffect(() => {}, []);
  const handleSearch = (event) => {
    // dispatch(Search(SearchInput.current.firstChild.value));
  };
  let CHTouched = (event) => {};
  const GenOnSub = (values) => {
    dispatch(addPlanetsPhotos(values.Photos));
    setred(true);
    console.log(values);
  };
  return (
    <div className={s.main}>
      <div className={classes.root}>
        {red ? <Redirect to="/PlanetsImg" /> : null}
        <HideOnScroll {...props}>
          <AppBar className={classes.mainHeader}>
            <Toolbar className={classes.root}>
              <div className={classes.hI}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <Panel loc={props.loc}></Panel>
                </IconButton>
                <span className={s.title}>NASA</span>
              </div>
              <div className={classes.hI}>
                <GeniusFromReduxSearch onSubmit={GenOnSub} />
                <NavLink
                  className={classes.ln}
                  to="/"
                  activeClassName={"ln_active"}
                >
                  <Button className={classes.cart} color="default">
                    <Badge badgeContent={1} color="secondary">
                      <Favorite></Favorite>
                    </Badge>
                  </Button>
                </NavLink>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </div>
    </div>
  );
};

let GeniusFromSearch = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        className={s.input}
        name="Photos"
        placeholder="search for planets"
        component="input"
        required
      ></Field>
      <button className={s.btn}>
        <SearchIcon className={s.searchg}></SearchIcon>
      </button>
    </form>
  );
};
const GeniusFromReduxSearch = reduxForm({
  form: "GeniusFromSearch",
})(GeniusFromSearch);

export default Header;
