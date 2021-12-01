import { ActionsType } from "./weatherActions";

const initialState = {
  data: {},
  error: "",
};

const weatherReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.WEATHER_FEATCH_START:
      return undefined;
    case ActionsType.WEATHER_FEATCH_SUCCESS:
      return { ...state, data: payload, error: "" };
    case ActionsType.WEATHER_FEATCH_ERROR:
      return { ...state, data: {}, error: payload };
    default:
      return state;
  }
};

export default weatherReduser;
