import React from "react";
import "./Search.css";

const Search = ({ getWeather, citySearch, handleSearch }) => {
  return (
    <form onSubmit={getWeather}>
      <div
        className="d-flex justify-content-center align-items-center input-group pt-5 pb-5 mb-4"
        id="search"
      >
        <div className="col-3 border-left-50">
          <input
            type="text"
            className="form-control input"
            placeholder="Enter the city"
            name="city"
            value={citySearch}
            onChange={handleSearch}
          />
        </div>
        <button className="btn btn-primary btnSearch" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
