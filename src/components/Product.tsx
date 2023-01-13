import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";
import { IProductInfoFromLocalStorage } from "../interfaces";
import StylizedButton from "./UI/StylizedButton";
import { Star } from "../icons";

interface IProductID {
  id: number;
}

function Product({ id }: IProductID) {
  const product = data.products.filter((obj) => obj.id === id)[0];
  const [thumbnail, setThumbnail] = useState(product.thumbnail);
  const [cart, setCart] = useState<IProductInfoFromLocalStorage[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("storage", () => {
      setCart(JSON.parse(localStorage.getItem("onlineStore") || "[]"));
    });
    setCart(JSON.parse(localStorage.getItem("onlineStore") || "[]"));
  }, []);

  return (
    <div className="product wrapper">
      <div className="product__header">
        <p>
          <span>{product.category}</span> &gt; <span>{product.brand}</span> &gt;{" "}
          <span>{product.title}</span>
        </p>
        <h2>{product.title}</h2>
        <div className="product__header__rating">
          <Star /> {product.rating}
        </div>
      </div>
      <div className="product__container">
        <div
          className="product__img"
          style={{ background: `url(${thumbnail}) 0% center / cover` }}
          onClick={() => window.location.assign(thumbnail)}
        >
          <div className="product__img__blackout"></div>
        </div>
        <div className="product__description">
          <div className="product__gallery">
            {product.images.map((img) => {
              return (
                <div
                  className="product__gallery__img"
                  style={{ background: `url(${img}) 0% center / cover` }}
                  onClick={() => setThumbnail(img)}
                ></div>
              );
            })}
          </div>
          <h2>{product.description}</h2>
          <p className="product__header__stock">In stock: {product.stock}</p>
          <h2 className="product__description__price">€{product.price}</h2>
          <p className="product__description__discount">
            <span className="product__description__old-price">
              €
              {(
                (product.price * 100) /
                (100 - product.discountPercentage)
              ).toFixed(2)}
            </span>
            <span className="product__description__discount-percentage">
              -{product.discountPercentage.toFixed(2)}%
            </span>
          </p>
          <div className="product__description__buttons">
            <StylizedButton
              name={
                cart.find((prod) => product.id === prod.id)
                  ? "Drop from cart"
                  : "Add to cart"
              }
              style="button_stylized button_stylized_brand"
              onClick={() => {
                const productInfo: IProductInfoFromLocalStorage = {
                  id: product.id,
                  count: 1,
                  price: product.price,
                };
                if (cart.find((obj) => obj.id === product.id)) {
                  cart.splice(
                    cart.findIndex((obj) => obj.id === product.id),
                    1
                  );
                } else {
                  cart.push(productInfo);
                }
                localStorage.setItem("onlineStore", JSON.stringify(cart));
                window.dispatchEvent(new Event("storage"));
              }}
            />
            <StylizedButton
              name="Buy now"
              style="button_stylized button_stylized_additional"
              onClick={() => {
                const productInfo: IProductInfoFromLocalStorage = {
                  id: product.id,
                  count: 1,
                  price: product.price,
                };
                if (!cart.find((obj) => obj.id === product.id)) {
                  cart.push(productInfo);
                }
                navigate("/cart");
                localStorage.setItem("buyNow", "true");
                localStorage.setItem("onlineStore", JSON.stringify(cart));
                window.dispatchEvent(new Event("storage"));
              }}
            />
          </div>
        </div>
      </div>
      <div className="product__specifications">
        <h2>Specifications</h2>
        <p>Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
        <p>Model: {product.title}</p>
      </div>
    </div>
  );
}

export default Product;
