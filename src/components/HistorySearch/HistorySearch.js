import React from "react";
import "./HistorySearch.css";
import ItemHistory from "./ItemHistory";

const HistorySearch = ({ items, handleClickCity, handleClickCords }) => {
  console.log("h", items);
  return (
    <div className="container-xl">
      {items &&
        items
          .map((item, index) => (
            <ItemHistory
              key={item.id + index}
              item={item}
              handleClickCity={handleClickCity}
              handleClickCords={handleClickCords}
            />
          ))
          .reverse()}
    </div>
  );
};

export default HistorySearch;
