import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import StylizedButton from './UI/StylizedButton';
import SvgSelector from './UI/SvgSelector';

function ShoppingCart() {

  interface IProductInCart {
    id: number;
    count: number;
    price: number;
  }

  interface IProductData {
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

  const [products, setProducts] = useState<IProductData[]>([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('onlineStore') || '[]');
    const productsWithData = products.map((product: IProductInCart) => {
      return data.products.find(dataProd => product.id === dataProd.id)
    });
    if (productsWithData) {
      setProducts(productsWithData);
    }
  }, []);

  const [cost, setCost] = useState(0);

  useEffect(() => {
    const totalCost: number = JSON.parse(localStorage.getItem('onlineStore') || '[]')
      .reduce((acc: number, product: IProductInCart) => acc + (product.price * product.count), 0);
    if (totalCost) {
      setCost(totalCost);
    }
  }, []);

  const [cart, setCart] = useState<IProductInCart[]>([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('onlineStore') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('onlineStore', JSON.stringify(cart));
  }, [cart]);

  function handleClickInc(product: IProductData | undefined) {
    (cart.find(el => product!.id === el.id))!.count++;
    localStorage.setItem('onlineStore', JSON.stringify(cart));
  }

  function handleClickDec(product: IProductData | undefined) {
    if ((cart.find(el => product!.id === el.id))!.count <= 1) {
        cart.splice(cart.findIndex(el => product!.id === el.id), 1);
        localStorage.setItem('onlineStore', JSON.stringify(cart));
    } else {
      (cart.find(el => product!.id === el.id))!.count--;
      localStorage.setItem('onlineStore', JSON.stringify(cart));
    }
  }

  return (
    <div className='shopping-cart'>
      <div className="wrapper">
        {products.length === 0
          ? <h2 className='shopping-cart__empty-cart-message'>Cart is empty</h2>
          :
          <div className="shopping-cart__container">
            <div className="products-in-cart">
              <div className="products-in-cart__header">Products in cart ({products.length})</div>
              <div className="products-in-cart__products">
                {
                  products.map((product: IProductData, i: number) => {
                    return (
                      <div className="products-in-cart__product">
                        <div className="products-in-cart__product__index">{i + 1}</div>
                        <div className="products-in-cart__product__thumbnail"><img src={product?.thumbnail} alt={product?.title} /></div>
                        <div className="products-in-cart__product__description">
                          <p>{product?.title}</p>
                          <p>{product?.description}</p>
                          <p><SvgSelector id={"star"} />{product?.rating}</p>
                        </div>
                        <div className="products-in-cart__product__price">
                          <p>€ {((product!.price * 100) / (100 - product!.discountPercentage)).toFixed(2)}</p>
                          <h3>€ {product?.price}</h3>
                          <p>-{product!.discountPercentage.toFixed(0)}%</p>
                        </div>
                        <div className="products-in-cart__product__amount">
                          <p>In stock: {product?.stock}</p>
                          <div className='product-amount-input'>
                            <button className='product-amount-input__btn' onClick={() => handleClickDec(product)}>–</button>
                            <input id="amountOfProduct" defaultValue='1' />
                            <button className='product-amount-input__btn' onClick={() => handleClickInc(product)}>+</button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className="summary">
              <div className="summary__header">Summary</div>
              <div className='summary__order-amount'><span>Order amount:</span><span>€ {cost}</span></div>
              <div className='summary__payment'><span>For payment:</span><span>€ {cost}</span></div>
              <label htmlFor="promocode"><span>Promocode:</span><input type="text" name='promocode' placeholder='Enter your code' /></label>
              <StylizedButton
                name='Buy now'
                style='button_stylized button_stylized_brand'
              />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ShoppingCart;
