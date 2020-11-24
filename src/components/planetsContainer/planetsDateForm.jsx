import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addPlanets } from "../../redux/planets_reducer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color: "#000",
    // pointerEvents : 'none',
    marginBottom: 20,
  },
  btn: {
    borderColor: "#000",
    color: "#000",
  },
}));

function PlanetsDateForm() {
  const classes = useStyles();

  let handelDate = (e) => {
    // debugger;
    console.log(DateOne.current.value, DateTwo.current.value);
    return "";
  };
  let dispatch = useDispatch();
  const DateOne = React.useRef(null);
  const DateTwo = React.useRef(null);
  let sendData = () => {
    dispatch(addPlanets(DateOne.current.value, DateTwo.current.value));
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        inputRef={DateOne}
        id="date"
        label="Start date"
        type="date"
        defaultValue="2020-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onClick={() => {
          handelDate();
        }}
      />
      <TextField
        inputRef={DateTwo}
        id="date"
        label="End date"
        type="date"
        defaultValue="2020-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        className={classes.btn}
        variant="outlined"
        onClick={() => {
          sendData();
        }}
      >
        Search for data
      </Button>
    </form>
  );
}

export default PlanetsDateForm;
