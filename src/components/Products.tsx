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

const dataFile: IData = data;

export const products = dataFile.products;

const Products = () => {
  const [valueSort, setValueSort] = useState<string>("sort-options");

  const [productsToShow, setProductsToShow] =
    useState<IProductData[]>(products);

  const [activeMode, setActiveMode] = useState(ActiveMode.big);

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSort]);

  useEffect(() => {
    chengeSelect();
  }, [chengeSelect, valueSort]);

  const amount = productsToShow.length;

  return (
    <main>
      <div className="wrapper main">
        <FilterBlock
          setProductsToShow={setProductsToShow}
          productsToShow={productsToShow}
        />
        <div className="products">
          <SortProducts
            setValueSort={setValueSort}
            valueSort={valueSort}
            activeMode={activeMode}
            setActiveMode={setActiveMode}
          />
          <ProductCardField products={productsToShow} activeMode={activeMode} />
        </div>
      </div>
    </main>
  );
};

export default Products;
