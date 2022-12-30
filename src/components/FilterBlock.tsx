import React from "react";
import Filter from "./Filter";
import SliderBlock from "./SliderBlock";
import Button from "./UI/Button";
import { IProducts } from "./Products";

interface IFilterBlock {
  setProductsToShow: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const FilterBlock = ({ setProductsToShow }: IFilterBlock) => {
  const filters: string[] = ["category", "brand"];
  const sliders: string[] = ["price", "stock"];

  return (
    <div className="filters">
      <div className="filter_buttons">
        <Button name="Reset Filters" />
        <Button name="Copy Link" />
      </div>
      {filters.map((value, index) => (
        <Filter
          key={index}
          name={value}
          setProductsToShow={setProductsToShow}
        />
      ))}
      {sliders.map((value, index) => (
        <SliderBlock key={index} name={value} />
      ))}
    </div>
  );
};

export default FilterBlock;
