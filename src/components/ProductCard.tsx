import React from "react";
import Button from "./UI/Button";
import SvgSelector from "./UI/SvgSelector";
import { useNavigate } from "react-router-dom";
import { ActiveMode } from "./SortProducts";

interface IStyle {
  width: string;
  height?: string;
  background?: string;
}

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

  let styleImj: IStyle;
  let styleCard: IStyle;

  if (activeMode === ActiveMode.big) {
    styleCard = { width: "300px" };
    styleImj = {
      width: "100%",
      height: "250px",
      background: `url(${background}) 0% center / cover`,
    };
  } else {
    styleCard = { width: "210px" };
    styleImj = {
      width: "100%",
      height: "175px",
      background: `url(${background}) 0% center / cover`,
    };
  }

  return (
    <div className="product-card" style={styleCard}>
      <div
        className="product-card_img"
        style={styleImj}
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
