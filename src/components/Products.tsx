import React from "react";
import { useState, useEffect, useCallback } from "react";
import SortProducts from "./SortProducts";
import ProductCardField from "./ProductCardField";
import { Options } from "./ViewOptions";
import data from "../data/data.json";

const products = data.products;

const Products = () => {
  const [valueSort, setValueSort] = useState<string>("sort-options");
  const [productsToShow, setProductsToShow] = useState(products);

  console.log(productsToShow);

  const chengeSelect = useCallback(() => {
    switch (valueSort) {
      case Options.priceASC:
        setProductsToShow(productsToShow.sort((a, b) => a.price - b.price));
        break;
      case Options.priceDESC:
        setProductsToShow(productsToShow.sort((a, b) => b.price - a.price));
        break;
      case Options.ratingASC:
        setProductsToShow(productsToShow.sort((a, b) => a.rating - b.rating));
        break;
      case Options.ratingDESC:
        setProductsToShow(productsToShow.sort((a, b) => b.rating - a.rating));
        break;
    }
  }, [productsToShow, valueSort]);

  useEffect(() => {
    chengeSelect();
  }, [chengeSelect, productsToShow, valueSort]);

  const [bigViewMode, setBigViewMode] = useState(true);
  function isBigViewMode() {
    setBigViewMode((current) => !current);
  }

  return (
    <div className="products">
      <SortProducts
        amount={100}
        setValueSort={setValueSort}
        valueSort={valueSort}
        isBigViewMode={isBigViewMode}
      />
      <ProductCardField products={productsToShow} viewMode={bigViewMode} />
    </div>
  );
};

export default Products;
