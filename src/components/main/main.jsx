import React, { useEffect } from "react";
import s from "./main.module.scss";
import * as axios from "axios";
import { useDispatch } from "react-redux";
import { addPlanets } from "../../redux/planets_reducer";
import { Button } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import { Planets } from "../../api/api";

const Main = ({ center, zoom }) => {
  const [planets, setPlanets] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(addPlanets());
    // Planets.NasaAudios();
  }, []);

  return (
    <div className={s.main}>
      <h1 className={s.title}>Welcome to the NASA</h1>

      <NavLink
        to="/Planets"
        activeClassName={"ln_active"}
        // onClick={() => {
        //   dispatch(addBooks());
        // }}
      >
        <Button className={s.btn} variant="outlined" color="secondary">
          Go and watch the data
        </Button>
      </NavLink>
    </div>
  );
};

export default Main;
