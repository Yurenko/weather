import React from "react";
import "./ItemHistory.css";
import classnames from "classnames";

const ItemHistory = ({ item, handleClickCity, handleClickCords }) => {
  const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
  const temp = (info) => Math.round((info - 273.15) * 100) / 100;

  return (
    <div className="border-top d-flex flex-wrap">
      <div className="p-2">
        <img src={icon} alt="icon" />
      </div>
      <div className="p-3">
        <h4>
          <button
            className="text-decoration-none text-underline-hover city"
            onClick={() => handleClickCity(item.name)}
          >
            {item.name}, {item.sys.country}
          </button>
          <span> {item.weather[0].description}</span>
        </h4>
        <span
          className={classnames("rounded-pill temp", {
            hot: temp(item.main.temp) >= 8,
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
          <button
            className="text-decoration-none text-underline-hover cords"
            onClick={() => handleClickCords(item.coord.lat, item.coord.lon)}
          >
            [{item.coord.lat}, {item.coord.lon}]
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemHistory;
