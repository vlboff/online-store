import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SliderBlock from "./SliderBlock";
import Button from "./UI/Button";
import { IProductData } from "../interfaces";
import { products } from "./Products";

interface IfiltersObj {
  [key: string]: string[];
}

interface IFilterBlock {
  setProductsToShow: React.Dispatch<React.SetStateAction<IProductData[]>>;
  productsToShow: IProductData[];
}

const FilterBlock = ({ setProductsToShow, productsToShow }: IFilterBlock) => {
  let filters: IfiltersObj = { category: [], brand: [] };
  const sliders: string[] = ["price", "stock"];

  const [keyFilterState, setKeyFilterState] = useState<string>("");
  const [valueFilterState, setValueFilterState] = useState<string[]>([]);
  const [filterObj] = useState(filters);

  useEffect(() => {
    for (let key in filterObj) {
      if (key === keyFilterState) {
        filterObj[key] = valueFilterState;
      }
    }
  }, [valueFilterState]);

  useEffect(() => {
    const filterKeys = Object.keys(filterObj);
    const filterValues = Object.values(filterObj);

    let filtredProducts: IProductData[] = Object.assign(products);

    for (let i = 0; i < filterKeys.length; i++) {
      filtredProducts = filtredProducts.filter((item) => {
        if (filterValues[i].length < 1) {
          return item;
        }
        if (filterValues[i].includes(item[filterKeys[i]] as string))
          return item;
      });
    }
    setProductsToShow(filtredProducts);
  }, [valueFilterState]);

  return (
    <div className="filters">
      <div className="filter_buttons">
        <Button name="Reset Filters" />
        <Button name="Copy Link" />
      </div>
      {Object.keys(filters).map((value) => (
        <Filter
          key={value}
          name={value}
          setKeyFilterState={setKeyFilterState}
          setValueFilterState={setValueFilterState}
          productsToShow={productsToShow}
        />
      ))}
      {sliders.map((value) => (
        <SliderBlock key={value} name={value} />
      ))}
    </div>
  );
};

export default FilterBlock;
