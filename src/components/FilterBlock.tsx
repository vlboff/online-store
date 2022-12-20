import React from "react";
import FilterList from "./FilterList";
import SliderBlock from "./SliderBlock";
import Button from "./UI/Button";

const FilterBlock = () => {
  return (
    <div className="filters">
      <div className="filter_buttons">
        <Button name="Reset Filters" />
        <Button name="Copy Link" />
      </div>
      <FilterList name="category" />
      <FilterList name="brand" />
      <SliderBlock name="price" />
      <SliderBlock name="stock" />
    </div>
  );
};

export default FilterBlock;
