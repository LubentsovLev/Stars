import { Planets } from "../api/api";

const SET_PLANETS = "PLANETS/SET_PLANETS";
const SET_PHOTOS = "PLANETS/SET_PHOTOS";
const IS_FETCHING = "PLANETS/IS_FETCHING";
const ADD_FAVORITE = "PLANETS/ADD_FAVORITE";
const SET_FAVORITE_ONE = "PLANETS/SET_FAVORITE_ONE";

let LocInfo = localStorage.getItem("favorites");
var ААА = eval("({obj:[" + LocInfo + "]})");
debugger;
let LocInfoArr = ААА.obj[0] ? ААА.obj[0].favorites : [];

let initialState = {
  planets: [],
  photos: [],
  favorites: LocInfoArr ? LocInfoArr : [],
  favoriteOne: [],
  isFetching: false,
};

const geniusReducer = (state = initialState, action) => {
  let CHFirst = false;
  let addToCart = () => {
    for (let i = 0; i < state.favorites.length; i++) {
      let id = state.favorites[i].data[0].nasa_id;
      if (id === action.favorites.data[0].nasa_id) {
        CHFirst = true;
      }
    }
  };
  if (state.favorites.length > 0 && action["type"] === ADD_FAVORITE) {
    addToCart();
  }
  switch (action.type) {
    case SET_PLANETS: {
      return { ...state, planets: action.planets };
    }
    case ADD_FAVORITE: {
      if (CHFirst === true) {
        return state;
      } else {
        localStorage.setItem(
          "favorites",
          JSON.stringify({
            favorites: [...state.favorites, action.favorites],
          })
        );
        return { ...state, favorites: [...state.favorites, action.favorites] };
      }
    }
    case SET_FAVORITE_ONE: {
      return { ...state, favoriteOne: action.favoriteOne };
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
export const setFavorites = (favorites) => {
  return {
    type: ADD_FAVORITE,
    favorites,
  };
};
export const setFavoriteOne = (favoriteOne) => {
  return {
    type: SET_FAVORITE_ONE,
    favoriteOne,
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
export const addPlanets = (DateOne, DateTwo) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await Planets.getPlanets(DateOne, DateTwo);
  dispath(setPlanets(response.data));
  dispath(setIsFetching(false));
};
export const addPlanetsPhotos = (q) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await Planets.getImgs(q);
  dispath(setPhotos(response.data));
  dispath(setIsFetching(false));
};
export const addPlanetsPhotosNext = (q) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await Planets.getNextPage(q);
  dispath(setPhotos(response.data));
  dispath(setIsFetching(false));
};
export const addFavoriteOne = (id) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await Planets.NasaId(id);
  dispath(setFavoriteOne(response));
  dispath(setIsFetching(false));
};
export default geniusReducer;
