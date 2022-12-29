import React from "react";
import { IProductData, IPropsForProductInCart } from "../interfaces";
import SvgSelector from "./UI/SvgSelector";

function ProductInCart({product, cart, i}: IPropsForProductInCart) {
  
  function handleClickInc(product: IProductData) {
    if ((cart.find(el => product.id === el.id))?.count || 0 < product.stock) {
      (cart.find(el => product.id === el.id))!.count++;
      localStorage.setItem('onlineStore', JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
    }
  }

  function handleClickDec(product: IProductData) {
    if ((cart.find(el => product!.id === el.id))!.count <= 1) {
      cart.splice(cart.findIndex(el => product!.id === el.id), 1);
      localStorage.setItem('onlineStore', JSON.stringify(cart));
    } else {
      (cart.find(el => product!.id === el.id))!.count--;
      localStorage.setItem('onlineStore', JSON.stringify(cart));
    };
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="products-in-cart__product">
      <div className="products-in-cart__product__index">{i + 1}</div>
      <div className="products-in-cart__product__thumbnail"><img src={product.thumbnail} alt={product.title} /></div>
      <div className="products-in-cart__product__description">
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p><SvgSelector id={"star"} />{product.rating}</p>
      </div>
      <div className="products-in-cart__product__price">
        <p>€ {((product!.price * 100) / (100 - product!.discountPercentage)).toFixed(2)}</p>
        <h3>€ {product.price}</h3>
        <p>-{product!.discountPercentage.toFixed(0)}%</p>
      </div>
      <div className="products-in-cart__product__amount">
        <p>In stock: {product.stock}</p>
        <div className='product-amount-input'>
          <button className='product-amount-input__btn' onClick={() => handleClickDec(product)}>–</button>
          <input id="amountOfProduct" defaultValue={cart.find(el => product!.id === el.id)?.count} disabled />
          <button className='product-amount-input__btn' onClick={() => handleClickInc(product)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
