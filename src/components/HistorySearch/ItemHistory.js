import React from "react";
import { NavLink } from "react-router-dom";
import "./ItemHistory.css";
import classnames from "classnames";

const ItemHistory = ({ item }) => {
  const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
  const temp = (info) => Math.round((info - 273.15) * 100) / 100;

  return (
    <div className="border-top d-flex flex-wrap">
      <div className="p-2">
        <img src={icon} alt="icon" />
      </div>
      <div className="p-3">
        <h4>
          <NavLink
            to="/"
            className="text-decoration-none text-underline-hover country"
          >
            {item.name}, {item.sys.country}
          </NavLink>
          <span> {item.weather[0].description}</span>
        </h4>
        <span
          className={classnames("rounded-pill temp", {
            hot: temp(item.main.temp) >= 30,
            norm: temp(item.main.temp) < 30 && temp(item.main.temp) > -10,
            cold: temp(item.main.temp) <= -10,
          })}
        >
          {temp(item.main.temp)} &#176;С
        </span>{" "}
        temperature from {temp(item.main.temp_min)} to{" "}
        {temp(item.main.temp_max)} &#176;С, wind {item.wind.speed} m/s. clouds{" "}
        {item.clouds.all} %, {item.main.pressure} hpa
        <div>
          Geo coords{" "}
          <NavLink
            to="/"
            className="text-decoration-none text-underline-hover cords"
          >
            [{item.coord.lon}, {item.coord.lat}]
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ItemHistory;
