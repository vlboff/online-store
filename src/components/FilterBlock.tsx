import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SliderBlock from "./SliderBlock";
import Button from "./UI/Button";
import { Options } from "../interfaces";
import { IObject } from "../interfaces";
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
  setValueCategory: React.Dispatch<React.SetStateAction<string[]>>;
  setValueBrand: React.Dispatch<React.SetStateAction<string[]>>;
  setValuePrice: React.Dispatch<React.SetStateAction<number[]>>;
  setValueStock: React.Dispatch<React.SetStateAction<number[]>>;
  setValueSearch: React.Dispatch<React.SetStateAction<string>>;
  setValueSort: React.Dispatch<React.SetStateAction<string>>;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
  currentURL: string;
  searchedValue: string;
}

const findMin = (key: string): number =>
  products.reduce((acc, v) => (acc[key] < v[key] ? acc : v))[key] as number;
const findMax = (key: string): number =>
  products.reduce((acc, v) => (acc[key] > v[key] ? acc : v))[key] as number;

const FilterBlock = ({
  setProductsToShow,
  productsToShow,
  setValueCategory,
  setValueBrand,
  setValuePrice,
  setValueStock,
  setValueSearch,
  setValueSort,
  setSearchedValue,
  currentURL,
  searchedValue,
}: IFilterBlock) => {
  let filters: IFiltersObj = { category: [], brand: [] };
  let sliders: ISliderObj = {
    price: [findMin("price"), findMax("price")],
    stock: [findMin("stock"), findMax("stock")],
  };

  const [isReset, setIsReset] = useState(false);
  const [buttonName, setButtonName] = useState("Copy Link");

  const [keyFilterState, setKeyFilterState] = useState<string>("");
  const [valueFilterState, setValueFilterState] = useState<string[]>([]);
  const [filterObj, setFilterObj] = useState<IFiltersObj>(() => {
    return JSON.parse(localStorage.getItem("filterObj") as string) || filters;
  });
  setValueCategory(filterObj.category);
  setValueBrand(filterObj.brand);

  const [keySliderState, setKeySliderState] = useState<string>("");
  const [valueSliderState, setValueSliderState] = useState<number[]>([]);
  const [sliderObj, setSliderObj] = useState<ISliderObj>(() => {
    return JSON.parse(localStorage.getItem("sliderObj") as string) || sliders;
  });
  setValuePrice(sliderObj.price);
  setValueStock(sliderObj.stock);

  localStorage.setItem("filterObj", JSON.stringify(filterObj));
  localStorage.setItem("sliderObj", JSON.stringify(sliderObj));

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

    let filtredProducts: IProductData[] = [...products];

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

    setValueSearch(searchedValue);

    filtredProducts = filtredProducts.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchedValue.toLowerCase()) ||
        product.category.toLowerCase().includes(searchedValue.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchedValue.toLowerCase()) ||
        product.rating.toString().includes(searchedValue) ||
        product.price.toString().includes(searchedValue) ||
        product.stock.toString().includes(searchedValue) ||
        product.discountPercentage.toString().includes(searchedValue)
      );
    });

    setProductsToShow(() => [...filtredProducts]);
  }, [valueFilterState, valueSliderState, searchedValue]);

  const findCurrentMin = (key: string): number => {
    if (productsToShow.length > 0) {
      return productsToShow.reduce((acc, v) => (acc[key] < v[key] ? acc : v))[
        key
      ] as number;
    } else {
      return findMin(key);
    }
  };

  const findCurrentMax = (key: string): number => {
    if (productsToShow.length > 0) {
      return productsToShow.reduce((acc, v) => (acc[key] > v[key] ? acc : v))[
        key
      ] as number;
    } else {
      return findMax(key);
    }
  };

  const chackboxState = (key: string, counter: IObject): boolean[] => {
    const filterItem = filterObj[key];
    const chackboxStateArray = Object.keys(counter).map((item) => {
      if (filterItem.includes(item)) {
        return true;
      } else {
        return false;
      }
    });
    return chackboxStateArray;
  };

  const copyURL = () => {
    localStorage.setItem("onlineStoreURL", currentURL);
    const tempElement = document.createElement("input"),
      text = currentURL;
    document.body.appendChild(tempElement);
    tempElement.value = text;
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);

    setButtonName("Copied!");
    setTimeout(() => setButtonName("Copy Link"), 500);
  };

  const reset = () => {
    setProductsToShow(products);

    setFilterObj(filters);
    setSliderObj(sliders);
    setValueSort(Options.sortOptions);
    setSearchedValue("");

    setIsReset(true);
  };

  return (
    <div className="filters">
      <div className="filter_buttons">
        <Button name="Reset Filters" onClick={reset} />
        <Button name={buttonName} onClick={copyURL} />
      </div>
      {Object.keys(filters).map((value) => (
        <Filter
          key={value}
          name={value}
          setKeyFilterState={setKeyFilterState}
          setValueFilterState={setValueFilterState}
          productsToShow={productsToShow}
          chackboxState={chackboxState}
          isReset={isReset}
          setIsReset={setIsReset}
        />
      ))}
      {Object.keys(sliders).map((value) => (
        <SliderBlock
          key={value}
          name={value}
          setKeySliderState={setKeySliderState}
          setValueSliderState={setValueSliderState}
          findMin={findMin}
          findMax={findMax}
          findCurrentMin={findCurrentMin}
          findCurrentMax={findCurrentMax}
        />
      ))}
    </div>
  );
};

export default FilterBlock;
