import React, { useEffect } from "react";
import s from "./planetsImg.module.scss";
import * as axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPlanets, addPlanetsPhotos } from "../../redux/planets_reducer";
import { Button } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import Loader from "../common/loader";

const PlanetsImg = ({ center, zoom }) => {
  const [planets, setPlanets] = React.useState(false);
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.planets.photos);
  const isFetching = useSelector((state) => state.planets.isFetching);
  useEffect(() => {
    let rel = photos.collection.items
      ? console.log(photos.collection.items[0])
      : null;
    console.log(photos.collection.items);
  }, [photos, isFetching]);
  useEffect(() => {
    dispatch(addPlanetsPhotos("black hole"));
  }, []);

  return (
    <div className={s.main}>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="hwey">
          {photos.collection.items.length !== 0 ? (
            <div className="">
              {photos.collection.items.map((i) => {
                return (
                  <div className="">
                    <h1 className={s.title}>{i.data[0].title}</h1>
                    <img className={s.img} src={i.links[0].href} alt="" />
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>Noting is found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default PlanetsImg;
