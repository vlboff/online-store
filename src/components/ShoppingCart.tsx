import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import { IProductData, IProductInCart, IPromocode } from '../interfaces';
import BuyProductsForm from './BuyProductsForm';
import ProductInCart from './ProductInCart';
import PromocodeBlock from './PromocodeBlock';
import ModalWindow from './UI/ModalWindow';
import Pagination from './UI/Pagination';
import StylizedButton from './UI/StylizedButton';

function ShoppingCart() {
  const [products, setProducts] = useState<IProductData[]>([]);
  const [cost, setCost] = useState(0);
  const [cart, setCart] = useState<IProductInCart[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);
  const [modalWindow, setModalWindow] = useState(false);
  const [usedPromocodes, setUsedPromocodes] = useState<IPromocode[]>([]);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    setModalWindow((JSON.parse(localStorage.getItem('buyNow') || 'false')));
  }, []);

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

  useEffect(() => {
    window.addEventListener('storage', () => {
      setUsedPromocodes(JSON.parse(localStorage.getItem('usedPromocodes') || '[]'));
    });
    setUsedPromocodes(JSON.parse(localStorage.getItem('usedPromocodes') || '[]'));
  }, []);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function estimateCostWithDiscount(cost: number) {
    return cost - cost * Number(usedPromocodes.reduce(((acc, cur) => acc + cur.disc), 0) / 100);
  }

  return (
    <div className='shopping-cart'>
      <div className="wrapper">
        {products.length === 0
          ? <h2 className='shopping-cart__empty-cart-message'>Cart is empty</h2>
          :
          <div className="shopping-cart__container">
            <div className="products-in-cart">
              <div className="products-in-cart__header">
                <span className="products-in-cart__header__amount">Products in cart ({products.length})</span>
                <Pagination
                  itemsPerPage={productsPerPage}
                  totalItems={cart.length}
                  paginate={paginate}
                />
                <label htmlFor="productsPerPage">
                  Limit:
                  <select
                    name="productsPerPage"
                    className='products-per-page'
                    defaultValue={+productsPerPage}
                    onChange={(e) => setProductsPerPage(+(e.target.value))}
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
              </div>
              <div className="products-in-cart__products">
                {
                  currentProduct.map((product: IProductData, i: number) =>
                    <ProductInCart product={product} cart={cart} i={currentPage === 1 ? i : i + (currentPage - 1) * productsPerPage} key={product.id} />
                  )
                }
              </div>
            </div>
            <div className="summary">
              <p className="summary__header">Summary</p>
              <div className='summary__order-amount'>
                <span>Order amount:</span>
                <span className={usedPromocodes.length === 0 ? '' : 'summary__order-amount_crossed'}>€ {cost}</span>
              </div>
              <div className='summary__payment'>
                <span>For payment:</span>
                <span>€ {!usedPromocodes ? cost : estimateCostWithDiscount(cost)}</span>
              </div>
              <PromocodeBlock />
              <StylizedButton
                name='Buy now'
                style='button_stylized button_stylized_brand'
                onClick={() => setModalWindow(true)}
                data-testid="buy-now-button"
              />
            </div>
          </div>
        }
      </div>
      <ModalWindow visible={modalWindow} setVisible={setModalWindow}>
        <BuyProductsForm />
      </ModalWindow>
    </div>
  )
}

export default ShoppingCart;
