import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    width: "100%",
  },
  loader: {
    width: "100px",
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loader} />
    </div>
  );
}
