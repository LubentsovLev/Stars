import * as axios from "axios";

let instance = axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=HZgYiGsVmXZXxw6Uc0dBmeMfYxuIJ0v1cZCtV7qI`,
});

export const Planets = {
  getPlanets(q) {
    let key = "HZgYiGsVmXZXxw6Uc0dBmeMfYxuIJ0v1cZCtV7qI";
    return (
      axios
        // .get(`&start_date=2017-07-08&end_date=2017-07-10&count=5`)
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=HZgYiGsVmXZXxw6Uc0dBmeMfYxuIJ0v1cZCtV7qI&start_date=2017-07-08&end_date=2017-07-10`
        )
        .then((data) => {
          return data;
        })
    );
  },
  getImgs(q = "black hole") {
    let key = "HZgYiGsVmXZXxw6Uc0dBmeMfYxuIJ0v1cZCtV7qI";
    return axios
      .get(`https://images-api.nasa.gov/search?q=${q}`)
      .then((data) => {
        return data;
      });
  },
};
