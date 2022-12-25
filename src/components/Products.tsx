import React from "react";
import { useState, useEffect } from "react";
import SortProducts from "./SortProducts";
import ProductCardField from "./ProductCardField";
import { Options } from "./ViewOptions";
import data from "../data/data.json";

const products = data.products;

const Products = () => {
  const [valueSort, setValueSort] = useState<string>("sort-options");
  const [productsToShow, setProductsToShow] = useState(products);

  console.log(productsToShow);

  useEffect(() => {
    chengeSelect();
  }, [valueSort]);

  function chengeSelect() {
    if (valueSort === Options.priceASC) {
      console.log(1);
      setProductsToShow(productsToShow.sort((a, b) => a.price - b.price));
    } else if (valueSort === Options.priceDESC) {
      console.log(2);
      setProductsToShow(productsToShow.sort((a, b) => b.price - a.price));
    } else if (valueSort === Options.ratingASC) {
      console.log(3);
      setProductsToShow(productsToShow.sort((a, b) => a.rating - b.rating));
    } else if (valueSort === Options.ratingDESC) {
      console.log(4);
      setProductsToShow(productsToShow.sort((a, b) => b.rating - a.rating));
    }
  }

  const [bigViewMode, setBigViewMode] = useState(true);
  function isBigViewMode() {
    setBigViewMode((current) => !current);
  }

  return (
    <div className="products">
      <SortProducts
        amount={100}
        chengeSelect={(sort) => setValueSort(sort)}
        valueSort={valueSort}
        isBigViewMode={isBigViewMode}
      />
      <ProductCardField products={productsToShow} viewMode={bigViewMode} />
    </div>
  );
};

export default Products;
