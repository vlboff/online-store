import React from "react";
import { IProductData } from "../interfaces";
import NotFoundProducts from "./NotFoundProducts";
import ProductCard from "./ProductCard";
import { Magnifier } from "../icons";

interface IProductCardField {
  products: IProductData[];
  activeMode: string;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
  searchedValue: string;
}

const ProductCardField = ({
  products,
  activeMode,
  setSearchedValue,
  searchedValue,
}: IProductCardField) => {
  const cardField = products.map((item) => {
    return (
      <ProductCard
        id={item.id}
        title={item.title}
        category={item.category}
        brand={item.brand}
        price={item.price}
        discount={item.discountPercentage}
        rating={item.rating}
        stock={item.stock}
        background={item.thumbnail}
        activeMode={activeMode}
        key={item.id}
      />
    );
  });

  return (
    <>
      <div className="amount-products">Found: {cardField.length}</div>
      <div className="search-bar">
        <label>
          <Magnifier />
          <input
            type="text"
            placeholder="Search on OnlineStore"
            value={searchedValue}
            onChange={(event) => setSearchedValue(event.target.value)}
          />
        </label>
      </div>
      {cardField.length > 0 ? (
        <div className="product-card_field">{cardField}</div>
      ) : (
        <NotFoundProducts />
      )}
    </>
  );
};

export default ProductCardField;
