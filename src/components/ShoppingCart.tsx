import React from 'react';
import data from '../data/data.json';

function ShoppingCart() {

  interface ProductInCart {
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

  const productsFromLocalStorage: ProductInCart[] = JSON.parse(localStorage.getItem('onlineStore') || '[]');
  const productsWithData = productsFromLocalStorage.map(product => {
    return data.products.find(dataProd => product.id === dataProd.id)
  });

  console.log(productsWithData)

  return (
    <div className='shopping-cart'>
      <div className="wrapper">
        { productsWithData.length === 0 
        ? <h1>Cart is empty</h1>
        :
          <div className="shopping-cart__container">
          <div className="products-in-cart">
            <div className="products-in-cart__header"></div>
            <div className="products-in-cart__products">
              {
                productsWithData.map((product, i) => {
                  return (
                    <div className="products-in-cart__product">
                      <div className="products-in-cart__product__index">{i + 1}</div>
                      <div className="products-in-cart__product__thumbnail"><img src={product?.thumbnail} alt={product?.title} /></div>
                      <div className="products-in-cart__product__description">
                        <p>{product?.title}</p>
                        <p>{product?.description}</p>
                        <p>{product?.rating}</p>
                      </div>
                      <div className="products-in-cart__product__price&amount">
                        <p>In stock: {product?.stock}</p>
                        <h3>{product?.price}</h3>
                        <div className='product-amount-input'>
                          <input type="number" name="" id="" min={1} max={product?.stock}/>
                        </div>
                      </div>
                    </div>
                    );
                })
              }
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default ShoppingCart;
