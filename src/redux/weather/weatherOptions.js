import { APIKEY } from "../../APIKEY";
import { featchWeatherError, featchWeatherSuccess } from "./weatherActions";

export const locationFeatchWeathers = (lat, lon) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
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
    });
};

export const featchWeathers = (city) => async (dispatch) => {
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
    });
};
