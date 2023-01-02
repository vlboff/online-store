import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import { IProductData, IProductInCart } from '../interfaces';
import BuyProductsForm from './BuyProductsForm';
import ProductInCart from './ProductInCart';
import ModalWindow from './UI/ModalWindow';
import Pagination from './UI/Pagination';
import StylizedButton from './UI/StylizedButton';

function ShoppingCart() {

  const [products, setProducts] = useState<IProductData[]>([]);
  const [cost, setCost] = useState(0);
  const [cart, setCart] = useState<IProductInCart[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

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
              <div className="products-in-cart__header">
                <span>Products in cart ({products.length})</span>
                <Pagination
                  itemsPerPage={productsPerPage}
                  totalItems={cart.length}
                  paginate={paginate}
                />
              </div>
              <div className="products-in-cart__products">
                { 
                  currentProduct.map((product: IProductData, i: number) => 
                    <ProductInCart product={product} cart={cart} i={currentPage === 1 ? i : i + (currentPage - 1) * productsPerPage} key={product.id}/>
                  )
                }
              </div>
            </div>
            <div className="summary">
              <p className="summary__header">Summary</p>
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
      <ModalWindow>
        <BuyProductsForm />
      </ModalWindow>
    </div>
  )
}

export default ShoppingCart;
