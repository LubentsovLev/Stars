
import React, { useEffect } from "react";
import s from "./planet.module.scss";
import * as axios from "axios";

const Planet = ({ center, zoom }) => {
  const [planets, setPlanets] = React.useState(false);
  // const getPlanets = async () => {
  //   let response = await axios.get(
  //     "https://api.nasa.gov/planetary/apod?api_key=HZgYiGsVmXZXxw6Uc0dBmeMfYxuIJ0v1cZCtV7qI&start_date=2017-07-08&end_date=2017-07-10&count=5"
  //   );
  //   setPlanets(response);
  //   console.log(response);
  // };
  useEffect(() => {
    // getPlanets();
  }, []);
  return <div className={s.map}></div>;
};

export default Planet;
