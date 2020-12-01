import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    textAlign: "center",
    backgroundColor: "#000",
    color: "#fff",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
  },
  Copyright: {
    color: "#fff !important",
  },
  CopyrightLN: {
    padding: "0 10px",
    color: "gray",
  },
  logo: {
    width: 40,
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <img
            className={classes.logo}
            src="https://www.tadviser.ru/images/9/9b/Nasa_logo.png"
            alt=""
          />
          {/* <Typography variant="body1">NASA</Typography> */}
          {/* <Copyright className={classes.Copyright} /> */}
          <p className={classes.Copyright}>
            Copyright ©
            <a className={classes.CopyrightLN} href="https://www.nasa.gov/">
              Official site
            </a>
            2020.
          </p>
        </Container>
      </footer>
    </div>
  );
}
