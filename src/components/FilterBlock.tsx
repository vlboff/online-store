import React from "react";
import Filter from "./Filter";
import SliderBlock from "./SliderBlock";
import Button from "./UI/Button";
import { IProducts } from "./Products";

interface IFilterBlock {
  dataArr: IProducts[];
}

const FilterBlock = ({ dataArr }: IFilterBlock) => {
  const filters = ["category", "brand"];
  const sliders = ["price", "stock"];

  return (
    <div className="filters">
      <div className="filter_buttons">
        <Button name="Reset Filters" />
        <Button name="Copy Link" />
      </div>
      {filters.map((value, index) => (
        <Filter key={index} name={value} />
      ))}
      {sliders.map((value, index) => (
        <SliderBlock key={index} name={value} />
      ))}
    </div>
  );
};

export default FilterBlock;
