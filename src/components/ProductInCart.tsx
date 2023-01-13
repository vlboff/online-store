import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProductData, IPropsForProductInCart } from "../interfaces";
import { Star } from "../icons";

function ProductInCart({ product, cart, i }: IPropsForProductInCart) {
  const navigate = useNavigate();
  const [currentAmount, setCurrentAmount] = useState(cart[i].count);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setCurrentAmount(cart[i].count);
    });
  }, [localStorage.getItem("onlineStore")]);

  function increaseAmount(product: IProductData) {
    if (cart[i].count < product.stock) {
      cart[i].count++;
      localStorage.setItem("onlineStore", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
    }
  }

  function decreaseAmount(product: IProductData) {
    if (cart[i].count <= 1) {
      cart.splice(
        cart.findIndex((el) => product.id === el.id),
        1
      );
      localStorage.setItem("onlineStore", JSON.stringify(cart));
    } else {
      cart[i].count -= 1;
      localStorage.setItem("onlineStore", JSON.stringify(cart));
    }
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="products-in-cart__product">
      <div className="products-in-cart__product__index">{i + 1}</div>
      <div className="products-in-cart__product__thumbnail">
        <img
          src={product.thumbnail}
          alt={product.title}
          onClick={() => navigate(`/products/${product.id}`)}
        />
      </div>
      <div className="products-in-cart__product__description">
        <p onClick={() => navigate(`/products/${product.id}`)}>
          {product.title}
        </p>
        <p>{product.description}</p>
        <p>
          <Star />
          {product.rating}
        </p>
      </div>
      <div className="products-in-cart__product__price">
        <p>
          €{" "}
          {(
            (product!.price * 100) /
            (100 - product!.discountPercentage)
          ).toFixed(2)}
        </p>
        <h3>€ {product.price}</h3>
        <p>-{product!.discountPercentage.toFixed(0)}%</p>
      </div>
      <div className="products-in-cart__product__amount">
        <p>In stock: {product.stock}</p>
        <div className="product-amount">
          <button
            className="product-amount__btn"
            onClick={() => decreaseAmount(product)}
          >
            –
          </button>
          <p className="product-amount__value">{currentAmount}</p>
          <button
            className="product-amount__btn"
            onClick={() => increaseAmount(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
