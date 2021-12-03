import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HistorySearch from "./components/HistorySearch/HistorySearch";
import Loader from "./components/Loader/Loader";
import Search from "./components/Search/Search";
import {
  featchWeathers,
  locationFeatchWeathers,
} from "./redux/weather/weatherOptions";

function App() {
  const [citySearch, setCitySearch] = useState("");
  const item = useSelector((state) => state.weatherReduser.data);
  const isLoading = useSelector((state) => state.weatherReduser.isLoading);
  const error = useSelector((state) => state.weatherReduser.error);

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        dispatch(locationFeatchWeathers(lat, lng));
      },
      function (error) {
        console.log(error.message);
      }
    );
  }, []);

  const fetchData = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    dispatch(featchWeathers(city)).then(() => {
      setCitySearch("");
    });
  };

  const handleSearch = (e) => {
    setCitySearch(e.target.value);
  };

  return (
    <div>
      <h1 className="container-xl border-bottom pb-2">Weather in your city</h1>
      <Search
        getWeather={fetchData}
        citySearch={citySearch}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <Loader />
      ) : (
        !error && <HistorySearch lastHistorySearch={item} />
      )}
    </div>
  );
}

export default App;
