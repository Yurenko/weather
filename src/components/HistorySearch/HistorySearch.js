import React from "react";
import "./HistorySearch.css";
import ItemHistory from "./ItemHistory";

const HistorySearch = ({ lastHistorySearch }) => {
  console.log(lastHistorySearch);
  return (
    <div className="container-xl">
      {lastHistorySearch &&
        lastHistorySearch
          .map((item, index) => (
            <ItemHistory key={item.id + index} item={item} />
          ))
          .reverse()}
    </div>
  );
};

export default HistorySearch;
