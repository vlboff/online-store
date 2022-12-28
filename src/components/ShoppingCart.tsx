import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import ProductInCart from './ProductInCart';
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
  const [cost, setCost] = useState(0);
  const [cart, setCart] = useState<IProductInCart[]>([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('onlineStore') || '[]');
    const productsWithData = products.map((product: IProductInCart) => {
      return data.products.find(dataProd => product.id === dataProd.id)
    });
    const totalCost: number = JSON.parse(localStorage.getItem('onlineStore') || '[]')
      .reduce((acc: number, product: IProductInCart) => acc + (product.price * product.count), 0);
    if (productsWithData) {
      setProducts(productsWithData);
    };
    if (totalCost) {
      setCost(totalCost);
    };
    setCart(products);
  }, []);

  useEffect(() => {
    window.addEventListener('storage', () => {
      const products = JSON.parse(localStorage.getItem('onlineStore') || '[]');
      const productsWithData = products.map((product: IProductInCart) => {
        return data.products.find(dataProd => product.id === dataProd.id)
      });
      if (productsWithData) {
        setProducts(productsWithData);
      };
    })
  }, []);

  useEffect(() => {
    window.addEventListener('storage', () => {
      const totalCost: number = JSON.parse(localStorage.getItem('onlineStore') || '[]')
        .reduce((acc: number, product: IProductInCart) => acc + (product.price * product.count), 0);
      if (totalCost) {
        setCost(totalCost);
      }
    })
  }, []);

  useEffect(() => {
    window.addEventListener('storage', () => {
      setCart(JSON.parse(localStorage.getItem('onlineStore') || '[]'));
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('onlineStore', JSON.stringify(cart));
  }, [cart]);

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
                  products.map((product: IProductData, i: number) => 
                    <ProductInCart product={product} cart={cart} i={i} key={product.id}/>
                  )
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
