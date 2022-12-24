import React from "react";
import ProductCard from "./ProductCard";

interface IData {
  products: IProducts[];
  viewMode: boolean;
}

interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ProductCardField = ({ products, viewMode }: IData) => {
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
        viewMode={viewMode}
        key={item.id}
      />
    );
  });

  return <div className="product-card_field">{cardField}</div>;
};

export default ProductCardField;
