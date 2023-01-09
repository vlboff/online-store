import React from "react";
import { useState, useEffect, useCallback } from "react";
import FilterBlock from "./FilterBlock";
import SortProducts from "./SortProducts";
import ProductCardField from "./ProductCardField";
import { Options } from "../interfaces";
import { ActiveMode } from "../interfaces";
import { IProductData } from "../interfaces";
import data from "../data/data.json";

interface IData {
  products: IProductData[];
  total: number;
  skip: number;
  limit: number;
}

interface Iquery {
  [key: string]: string;
}

const dataFile: IData = data;

export const products = dataFile.products;

const Products = () => {
  const [searchedValue, setSearchedValue] = useState<string>(() => {
    return (localStorage.getItem("searchedValue") as string) || "";
  });

  const [valueCategory, setValueCategory] = useState<string[]>([]);
  const [valueBrand, setValueBrand] = useState<string[]>([]);
  const [valuePrice, setValuePrice] = useState<number[]>([]);
  const [valueStock, setValueStock] = useState<number[]>([]);
  const [activeMode, setActiveMode] = useState<string>(() => {
    return (localStorage.getItem("activeMode") as string) || ActiveMode.big;
  });
  const [valueSort, setValueSort] = useState<string>(() => {
    return (localStorage.getItem("valueSort") as string) || Options.sortOptions;
  });
  const [valueSearch, setValueSearch] = useState<string>("");

  const [query, setQuery] = useState<Iquery>({});

  const queryObj = {
    category: valueCategory.join(","),
    brand: valueBrand.join(","),
    price: valuePrice.join(","),
    stock: valueStock.join(","),
    viewMode: activeMode,
    sort: valueSort,
    search: valueSearch,
  };

  useEffect(() => {
    setQuery(queryObj);
  }, [
    valueCategory,
    valueBrand,
    valuePrice,
    valueStock,
    activeMode,
    valueSort,
    valueSearch,
  ]);

  const url = new URL(window.location.href);
  const params = new URLSearchParams();
  for (let key in query) {
    params.append(key, query[key]);
  }
  url.search = params.toString();
  window.history.pushState(
    null,
    "",
    `?${params.toString().replace(/%2C/g, "\u{2B0D}")}`
  );

  const currentURL = url.href;

  const [productsToShow, setProductsToShow] =
    useState<IProductData[]>(products);

  const chengeSelect = useCallback(() => {
    switch (valueSort) {
      case Options.priceASC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => a.price - b.price),
        ]);
        break;
      case Options.priceDESC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => b.price - a.price),
        ]);
        break;
      case Options.ratingASC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => a.rating - b.rating),
        ]);
        break;
      case Options.ratingDESC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => b.rating - a.rating),
        ]);
        break;
      case Options.sortOptions:
        setProductsToShow([...productsToShow.sort((a, b) => a.id - b.id)]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSort]);

  useEffect(() => {
    chengeSelect();
  }, [chengeSelect, valueSort]);

  const amount = productsToShow.length;

  function setLocalStorage() {
    localStorage.setItem("activeMode", activeMode);
    localStorage.setItem("searchedValue", searchedValue);
    localStorage.setItem("valueSort", valueSort);
  }

  useEffect(() => {
    setLocalStorage();
  }, [activeMode, searchedValue, valueSort]);

  return (
    <main>
      <div className="wrapper main">
        <FilterBlock
          setProductsToShow={setProductsToShow}
          productsToShow={productsToShow}
          setValueCategory={setValueCategory}
          setValueBrand={setValueBrand}
          setValuePrice={setValuePrice}
          setValueStock={setValueStock}
          setValueSearch={setValueSearch}
          setValueSort={setValueSort}
          setSearchedValue={setSearchedValue}
          currentURL={currentURL}
          searchedValue={searchedValue}
        />
        <div className="products">
          <SortProducts
            setValueSort={setValueSort}
            valueSort={valueSort}
            activeMode={activeMode}
            setActiveMode={setActiveMode}
          />
          <ProductCardField
            products={productsToShow}
            activeMode={activeMode}
            searchedValue={searchedValue}
            setSearchedValue={setSearchedValue}
          />
        </div>
      </div>
    </main>
  );
};

export default Products;
