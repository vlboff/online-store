import React from "react";
import { useState } from "react";
import SortProducts from "./SortProducts";
import ProductCardField from "./ProductCardField";
import data from "../data/data.json";

const products = data.products;

const Products = () => {
  const [value, setValue] = useState("");
  const [productsToShow, setProductsToShow] = useState(products);

  function chengeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
    if (event.target.value === "price-ASC") {
      setProductsToShow(productsToShow.sort((a, b) => a.price - b.price));
    } else if (event.target.value === "price-DESC") {
      setProductsToShow(productsToShow.sort((a, b) => b.price - a.price));
    } else if (event.target.value === "rating-ASC") {
      setProductsToShow(productsToShow.sort((a, b) => a.rating - b.rating));
    } else if (event.target.value === "rating-DESC") {
      setProductsToShow(productsToShow.sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div className="products">
      <SortProducts amount={100} sortValue={chengeSelect} />
      <ProductCardField products={productsToShow} />
    </div>
  );
};

export default Products;