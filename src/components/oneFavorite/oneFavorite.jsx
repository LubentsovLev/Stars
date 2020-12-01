import React, { useEffect } from "react";
import s from "./oneFavorite.module.scss";
import * as axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import Loader from "../common/loader";

const OneFavorite = (props) => {
  const [planets, setPlanets] = React.useState(false);
  const dispatch = useDispatch();

  const favoriteOne = useSelector((state) => state.planets.favoriteOne);
  const isFetching = useSelector((state) => state.planets.isFetching);
  useEffect(() => {}, [favoriteOne, isFetching]);
  //   useEffect(() => {}, [favorites, isFetching]);
  let inst =
    favoriteOne.length !== 0 ? favoriteOne.collection.items[0] : null;
  //   let inst = favoriteOne.collection.items[0];
  return (
    <div className={s.main}>
      {!isFetching ? (
        <div className="">
          {inst ? (
            <div className={s.body}>
              <div className={s.img}>
                <img src={inst.links ? inst.links[0].href : ""} alt="" />
              </div>
              <div className={s.texts}>
                <div className={s.title}> {inst.data[0].title}</div>
                <div className={s.date}>{inst.data[0].date_created}</div>
                <div className={s.text}>{inst.data[0].description}</div>
                <img src="" alt="" />
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OneFavorite;
