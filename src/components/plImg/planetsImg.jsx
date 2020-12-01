import React, { useEffect } from "react";
import s from "./planetsImg.module.scss";
import * as axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlanets,
  addPlanetsPhotos,
  addPlanetsPhotosNext,
} from "../../redux/planets_reducer";
import { Button } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import Loader from "../common/loader";
import PlImgCard from "./plImgCard";

const PlanetsImg = ({ center, zoom }) => {
  const [planets, setPlanets] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPlanetsPhotos("black hole")).then(() => {
      setPlanets(true);
    });
  }, []);

  const photos = useSelector((state) => state.planets.photos);
  const isFetching = useSelector((state) => state.planets.isFetching);
  useEffect(() => {
    // let rel = photos.collection
    //   ? console.log(photos.collection.items[0])
    //   : null;
  }, [photos, isFetching]);
  return (
    <div className={s.main}>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="hwey">
          {planets && photos.collection.items.length !== 0 ? (
            <div className={s.containerMap}>
              {console.log(photos)}
              {photos.collection.items.map((i) => {
                return <PlImgCard key={i.data[0].nasa_id} data={i} />;
              })}
            </div>
          ) : (
            <h1>Noting is found</h1>
          )}
        </div>
      )}
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          dispatch(addPlanetsPhotosNext(photos.collection.links[0].href));
        }}
      >
        Next page
      </Button>
    </div>
  );
};

export default PlanetsImg;
