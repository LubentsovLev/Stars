import { Planets } from "../api/api";

const SET_PLANETS = "PLANETS/SET_PLANETS";
const SET_PHOTOS = "PLANETS/SET_PHOTOS";
const IS_FETCHING = "PLANETS/IS_FETCHING";

let initialState = {
  planets: [],
  photos: [],
  isFetching: false,
};

const geniusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS: {
      return { ...state, planets: action.planets };
    }
    case SET_PHOTOS: {
      return { ...state, photos: action.photos };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setPlanets = (planets) => {
  return {
    type: SET_PLANETS,
    planets,
  };
};
export const setPhotos = (photos) => {
  return {
    type: SET_PHOTOS,
    photos,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching,
  };
};
export const addPlanets = () => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await Planets.getPlanets();
  let response2 = await Planets.getImgs();
  dispath(setPlanets(response.response));
  console.log(response);
  dispath(setIsFetching(false));
};
export const addPlanetsPhotos = (q) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await Planets.getImgs(q);
  dispath(setPhotos(response.data));
  console.log(response.data);
  dispath(setIsFetching(false));
};
export default geniusReducer;
