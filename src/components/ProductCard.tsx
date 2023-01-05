import React from "react";
import Button from "./UI/Button";
import SvgSelector from "./UI/SvgSelector";
import { useNavigate } from "react-router-dom";
import { ActiveMode } from "../interfaces";

interface IProductCard {
  id: number;
  title: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  rating: number;
  stock: number;
  background: string;

  activeMode: string;
}

const ProductCard = ({
  id,
  title,
  category,
  brand,
  price,
  discount,
  rating,
  stock,
  background,
  activeMode,
}: IProductCard) => {
  let navigate = useNavigate();

  return (
    <div
      className={`product-card ${
        activeMode === ActiveMode.big ? "" : "small_card"
      }`}
    >
      <div
        className={`product-card_img ${
          activeMode === ActiveMode.big ? "" : "small_img"
        }`}
        style={{ background: `url(${background}) 0% center / cover` }}
        onClick={() => navigate(`products/${id}`)}
      >
        <div className="product-card_blackout"></div>
      </div>
      <div
        className="product-card_title"
        onClick={() => navigate(`products/${id}`)}
      >
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
