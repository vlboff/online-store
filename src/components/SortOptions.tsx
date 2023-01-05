import React from "react";
import { Options } from "../interfaces";

interface ISortOptions {
  valueSort: string;
  setValueSort: React.Dispatch<React.SetStateAction<string>>;
}

const SortOptions = ({ valueSort, setValueSort }: ISortOptions) => {
  return (
    <select
      className="sort-bar"
      name="sort"
      id="sort"
      value={valueSort}
      onChange={(event) => setValueSort(event.target.value)}
    >
      <option disabled value="sort-options">
        Sort options:
      </option>
      <option value={Options.priceASC}>Sort by price ASC</option>
      <option value={Options.priceDESC}>Sort by price DESC</option>
      <option value={Options.ratingASC}>Sort by rating ASC</option>
      <option value={Options.ratingDESC}>Sort by rating DESC</option>
    </select>
  );
};

export default SortOptions;
