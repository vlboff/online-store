import React from 'react';
import data from '../data/data.json';
import StylizedButton from './UI/StylizedButton';
import SvgSelector from './UI/SvgSelector';

interface IProductID {
  id: number;
}

function Product({ id }: IProductID) {
  const product = data.products.filter(obj => obj.id === id)[0];
  console.log(product);
  return (
    <div className='product wrapper'>
      <div className="product__header">
        <p><span>{product.category}</span> &gt; <span>{product.brand}</span> &gt; <span>{product.title}</span></p>
        <h2>{product.title}</h2>
        <div className='product__header__rating'><SvgSelector id={"star"} /> {product.rating}<span className='product__header__stock'>In stock: {product.stock}</span></div>
      </div>
      <div className='product__container'>
        <div
          className='product__img'
          style={{ background: `url(${product.thumbnail}) 0% center / cover` }}
          onClick={() => window.location.assign(product.thumbnail)}
        >
          <div className='product__img__blackout'></div>
        </div>
        <div className="product__description">
          <div className="product__gallery">
            {product.images.map(img => {
              return (
                <div className='product__gallery__img' style={{ background: `url(${img}) 0% center / cover` }}></div>
              )
            })}
          </div>
          <h2>{product.description}</h2>
          <h2 className='product__description__price'>€{product.price}</h2>
          <p className='product__description__discount'>
            <span className='product__description__old-price'>€{((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}</span>
            <span className='product__description__discount-percentage'>-{(product.discountPercentage).toFixed(2)}%</span>
          </p>
          <div className="product__description__buttons">
            <StylizedButton name='Add to cart' style='button_stylized button_stylized_brand' />
            <StylizedButton name='Buy now' style='button_stylized button_stylized_additional' />
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
  )
}

export default Product;