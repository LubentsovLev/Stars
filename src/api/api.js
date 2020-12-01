import * as axios from "axios";
let key = "f4yQzYnbxNMKohKTB2Jv7Tr4zqHZ6YPrL3gC9Kb4";
let instance = axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=${key}`,
});

export const Planets = {
  getPlanets(DateOne, DateTwo) {
    return (
      axios
        // .get(`&start_date=2017-07-08&end_date=2017-07-10&count=5`)
        .get(
          // `https://api.nasa.gov/planetary/apod?api_key=HZgYiGsVmXZXxw6Uc0dBmeMfYxuIJ0v1cZCtV7qI&start_date=${DateOne}&end_date=${DateTwo}`
          `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${DateOne}&end_date=${DateTwo}`
        )
        .then((data) => {
          return data;
        })
    );
  },
  getNextPage(url) {
    return axios.get(url).then((data) => {
      return data;
    });
  },
  getImgs(q = "black hole") {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${q}`)
      .then((data) => {
        return data;
      });
  },
  NasaId(id = "behemoth-black-hole-found-in-an-unlikely-place_26209716511_o") {
    return axios
      .get(`https://images-api.nasa.gov/search?nasa_id=${id}`)
      .then((data) => {
        return data.data;
      });
  },
  // NasaAudios(
  //   id = "behemoth-black-hole-found-in-an-unlikely-place_26209716511_o"
  // ) {
  //   return axios
  //     .get(`https://images-api.nasa.gov/search?media_type=audio`)
  //     .then((data) => {
  //       console.log(data.data);
  //       return data.data;
  //     });
  // },
};
