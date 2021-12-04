import { APIKEY } from "../../APIKEY";
import {
  featchWeatherError,
  featchWeatherSuccess,
  loadingWeather,
} from "./weatherActions";

export const locationFeatchWeathers = (lat, lng) => async (dispatch) => {
  dispatch(loadingWeather(true));
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        dispatch(featchWeatherSuccess(data));
      } else {
        dispatch(featchWeatherError(data.message));
        throw new Error(data.message);
      }
    })
    .catch((error) => {
      console.log("Error location featch", error);
    })
    .finally(() => {
      dispatch(loadingWeather(false));
    });
};

export const featchWeathers = (city) => async (dispatch) => {
  dispatch(loadingWeather(true));
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=celsius&APPID=${APIKEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        dispatch(featchWeatherSuccess(data));
      } else {
        dispatch(featchWeatherError(data.message));
        throw new Error(data.message);
      }
    })
    .catch((error) => {
      console.log("Error search city", error);
    })
    .finally(() => {
      dispatch(loadingWeather(false));
    });
};
