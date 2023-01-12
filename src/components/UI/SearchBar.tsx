import React from "react";
import { Magnifier } from "../../icons";

function SearchBar() {
  return (
    <div className="search-bar">
      <label>
        <Magnifier />
        <input type="text" placeholder="Search on OnlineStore" />
      </label>
    </div>
  );
}

export default SearchBar;
