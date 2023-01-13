import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartImg } from "../../icons";

interface IProductInfo {
  id: number;
  count: number;
  price: number;
}

function ShoppingCartIcon() {
  const [productsAmount, setProductsAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const productsAmount = JSON.parse(
      localStorage.getItem("onlineStore") || "[]"
    ).reduce(
      (acc: number, product: IProductInfo) => acc + 1 * product.count,
      0
    );
    const totalCost = JSON.parse(
      localStorage.getItem("onlineStore") || "[]"
    ).reduce(
      (acc: number, product: IProductInfo) =>
        acc + product.price * product.count,
      0
    );
    if (productsAmount) {
      setProductsAmount(productsAmount);
    }
    if (totalCost) {
      setTotalCost(totalCost);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const productsAmount = JSON.parse(
        localStorage.getItem("onlineStore") || "[]"
      ).reduce(
        (acc: number, product: IProductInfo) => acc + 1 * product.count,
        0
      );
      setProductsAmount(productsAmount);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const totalCost = JSON.parse(
        localStorage.getItem("onlineStore") || "[]"
      ).reduce(
        (acc: number, product: IProductInfo) =>
          acc + product.price * product.count,
        0
      );
      setTotalCost(totalCost);
    });
  }, []);

  return (
    <Link to='/cart' className='link_unstressed'>
      <div className="shopping-cart-icon">
        <ShoppingCartImg />
        {productsAmount != 0 ? (
          <div className="shopping-cart-icon__numder-of-products">
            {productsAmount}
          </div>
        ) : (
          ""
        )}
        <div className="shopping-cart-icon__modal">
          <span className="shopping-cart-icon__modal__cost">
            Total cost: <span>€{totalCost}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ShoppingCartIcon;
