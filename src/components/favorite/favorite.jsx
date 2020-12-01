import React, { useEffect } from "react";
import s from "./favorite.module.scss";
import * as axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPlanetsPhotos } from "../../redux/planets_reducer";
import { Button } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import Loader from "../common/loader";
import FavoriteCard from "./favoriteCard";

const FavoritePage = (props) => {
  const [planets, setPlanets] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(addPlanetsPhotos("black hole")).then(() => {
    //   setPlanets(true);
    // });
  }, []);

  const favorites = useSelector((state) => state.planets.favorites);
  const isFetching = useSelector((state) => state.planets.isFetching);
  useEffect(() => {}, [favorites, isFetching]);
  return (
    <div className={s.main}>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="">
          {favorites.length !== 0 ? (
            <div className={s.containerMap}>
              {console.log(favorites)}
              {favorites.map((i) => {
                return (
                  <FavoriteCard key={i.data[0].nasa_id} data={i} />
                  //   <div key={i} className="">
                  //     <h1 className={s.title}>{i.data[0].title}</h1>
                  //     <img
                  //       className={s.img}
                  //       src={i.links ? i.links[0].href : ""}
                  //       alt=""
                  //     />
                  //   </div>
                );
              })}
            </div>
          ) : (
            <div className="">
              <h1>U've got nothing in the favorites</h1>
              <NavLink
                // className={classes.ln}
                to="/PlanetsImg"
                activeClassName={"ln_active"}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    //   dispatch();
                  }}
                >
                  Check for some planets
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
