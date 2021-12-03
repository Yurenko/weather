import React from "react";
import { NavLink } from "react-router-dom";

const ItemHistory = ({ item }) => {
  const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

  return (
    <div className="border-top d-flex flex-wrap">
      <div className="p-2">
        <img src={icon} alt="icon" />
      </div>
      <div className="p-3">
        <h4>
          <NavLink to="" className="">
            {" "}
            {item.name}, {item.sys.country}
          </NavLink>
          <span> {item.weather[0].description}</span>
        </h4>
        <span id="temp" className="rounded-pill">
          {Math.round((item.main.temp - 273.15) * 100) / 100} &#176;С
        </span>{" "}
        temperature from {Math.round((item.main.temp_min - 273.15) * 100) / 100}{" "}
        to {Math.round((item.main.temp_max - 273.15) * 100) / 100} &#176;С, wind{" "}
        {item.wind.speed} m/s. clouds {item.clouds.all} %, {item.main.pressure}{" "}
        hpa
        <div>
          Geo coords{" "}
          <NavLink to="" className="">
            [{item.coord.lon}, {item.coord.lat}]
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ItemHistory;
