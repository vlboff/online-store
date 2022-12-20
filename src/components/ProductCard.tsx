import React from "react";
import Button from "./UI/Button";
import SvgSelector from "./UI/SvgSelector";

interface IProductCard {
  key: number;

  title: string;

  category: string;
  brand: string;
  price: number;
  discount: number;
  rating: number;
  stock: number;

  background: string;
}

const ProductCard = ({
  key,
  title,
  category,
  brand,
  price,
  discount,
  rating,
  stock,
  background,
}: IProductCard) => {
  return (
    <div className="product-card">
      <div
        className="product-card_img"
        style={{
          background: `url(${background}) 0% center / cover`,
        }}
      >
        <div className="product-card_blackout"></div>
      </div>
      <div className="product-card_title">
        <p>{title}</p>
      </div>
      <div className="product-card_dscr">
        <div className="product-card_rating">
          <div>
            <SvgSelector id={"star"} /> {rating}
          </div>{" "}
          <div>stock: {stock}</div>
        </div>
        <p className="product-card_price">€{price}</p>
      </div>
      <div className="product-card_buttons">
        <Button name="ADD TO CART" />
        <Button name="DETAILS" />
      </div>
    </div>
  );
};

export default ProductCard;
