import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SliderBlock from "./SliderBlock";
import Button from "./UI/Button";
import { IProductData } from "../interfaces";
import { products } from "./Products";

interface IFiltersObj {
  [key: string]: string[];
}

interface ISliderObj {
  [key: string]: number[];
}

interface IFilterBlock {
  setProductsToShow: React.Dispatch<React.SetStateAction<IProductData[]>>;
  productsToShow: IProductData[];
}

const FilterBlock = ({ setProductsToShow, productsToShow }: IFilterBlock) => {
  let filters: IFiltersObj = { category: [], brand: [] };
  let sliders: ISliderObj = { price: [], stock: [] };

  const [keyFilterState, setKeyFilterState] = useState<string>("");
  const [valueFilterState, setValueFilterState] = useState<string[]>([]);
  const [filterObj] = useState(filters);

  const [keySliderState, setKeySliderState] = useState<string>("");
  const [valueSliderState, setValueSliderState] = useState<number[]>([]);
  const [sliderObj] = useState(sliders);

  console.log(valueSliderState);

  useEffect(() => {
    for (let key in filterObj) {
      if (key === keyFilterState) {
        filterObj[key] = valueFilterState;
      }
    }
  }, [valueFilterState]);

  useEffect(() => {
    for (let key in sliderObj) {
      if (key === keySliderState) {
        sliderObj[key] = valueSliderState;
      }
    }
  }, [valueSliderState]);

  useEffect(() => {
    const filterKeys = Object.keys(filterObj);
    const filterValues = Object.values(filterObj);
    const sliderKeys = Object.keys(sliderObj);
    const sliderValues = Object.values(sliderObj);

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

    for (let i = 0; i < sliderKeys.length; i++) {
      filtredProducts = filtredProducts.filter((item) => {
        if (
          item[sliderKeys[i]] >= sliderValues[i][0] &&
          item[sliderKeys[i]] <= sliderValues[i][1]
        ) {
          return item;
        }
      });
    }

    setProductsToShow(filtredProducts);
  }, [valueFilterState, valueSliderState]);

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
      {Object.keys(sliders).map((value) => (
        <SliderBlock
          key={value}
          name={value}
          setKeySliderState={setKeySliderState}
          setValueSliderState={setValueSliderState}
        />
      ))}
    </div>
  );
};

export default FilterBlock;
