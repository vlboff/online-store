import React, { useEffect, useState } from "react";
import Button from "./UI/Button";
import { Star } from "../icons";
import { useNavigate } from "react-router-dom";
import { ActiveMode, IProductInfoFromLocalStorage } from "../interfaces";

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
  const [cart, setCart] = useState<IProductInfoFromLocalStorage[]>([]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setCart(JSON.parse(localStorage.getItem("onlineStore") || "[]"));
    });
    setCart(JSON.parse(localStorage.getItem("onlineStore") || "[]"));
  }, []);

  const navigate = useNavigate();

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
            <Star /> {rating}
          </div>{" "}
          <div>stock: {stock}</div>
        </div>
        <p className="product-card_price">€{price}</p>
      </div>
      <div className="product-card_buttons">
        <Button
          name={
            cart.find((prod) => id === prod.id)
              ? "Drop from cart"
              : "Add to cart"
          }
          onClick={() => {
            const productInfo = { id: id, count: 1, price: price };
            if (cart.find((obj) => obj.id === id)) {
              cart.splice(
                cart.findIndex((obj) => obj.id === id),
                1
              );
            } else {
              cart.push(productInfo);
            }
            localStorage.setItem("onlineStore", JSON.stringify(cart));
            window.dispatchEvent(new Event("storage"));
          }}
        />
        <Button name="Details" onClick={() => navigate(`/products/${id}`)} />
      </div>
    </div>
  );
};

export default ProductCard;
