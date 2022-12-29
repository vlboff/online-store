import React from "react";
import { useState, useEffect, useCallback } from "react";
import SortProducts from "./SortProducts";
import ProductCardField from "./ProductCardField";
import { Options } from "./ViewOptions";
import { ActiveMode } from "./SortProducts";
import data from "../data/data.json";
import { IProductData } from "../interfaces";

interface IData {
  products: IProductData[];
  total: number;
  skip: number;
  limit: number;
}

const dataFile: IData = data;

const products = dataFile.products;

const Products = () => {
  const [valueSort, setValueSort] = useState<string>("sort-options");

  const [productsToShow, setProductsToShow] = useState<IProductData[]>(products);

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
  }, [valueSort]);

  useEffect(() => {
    chengeSelect();
  }, [chengeSelect, valueSort]);

  return (
    <div className="products">
      <SortProducts
        amount={100}
        setValueSort={setValueSort}
        valueSort={valueSort}
        activeMode={activeMode}
        setActiveMode={setActiveMode}
      />
      <ProductCardField products={productsToShow} activeMode={activeMode} />
    </div>
  );
};

export default Products;
