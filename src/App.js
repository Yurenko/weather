import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Search from "./components/Search/Search";
import {
  featchWeathers,
  locationFeatchWeathers,
} from "./redux/weather/weatherOptions";

function App() {
  const dispatch = useDispatch();
  const [citySearch, setCitySearch] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
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
    dispatch(featchWeathers(city))
      .then(() => {
        setCitySearch("");
      })
      .catch((errorMassage) => {
        alert(errorMassage);
        setCitySearch("");
      });
  };

  const handleSearch = (e) => {
    setCitySearch(e.target.value);
  };

  return (
    <div className="container-xl">
      <h1 className="border-bottom pb-2">Weather in your city</h1>
      <Search
        getWeather={fetchData}
        citySearch={citySearch}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
