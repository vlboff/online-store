import React, { useState } from "react";
import NotFoundProducts from "./NotFoundProducts";
import ProductCard from "./ProductCard";
import SvgSelector from "./UI/SvgSelector";

interface IData {
  products: IProducts[];
  total?: number;
  skip?: number;
  limit?: number;
}

interface IProducts {
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

const ProductCardField = (products: IData) => {
  const [searchedValue, setSearchedValue] = useState('')
  
  let searchedProducts = products.products.filter((product) => {
    return product.title.toLowerCase().includes(searchedValue.toLowerCase());
  })

  const cardField = searchedProducts.map((item) => {
    return (
      <ProductCard
        id={item.id}
        title={item.title}
        category={item.category}
        brand={item.brand}
        price={item.price}
        discount={item.discountPercentage}
        rating={item.rating}
        stock={item.stock}
        background={item.thumbnail}

        key={item.id}
      />
    );
  });
  console.log(cardField)
  return (
    <>
      <div className='search-bar'>
        <label >
          <SvgSelector id='magnifier' />
          <input type="text" placeholder='Search on OnlineStore' onChange={(event) => setSearchedValue(event.target.value)} />
        </label>
      </div>
      {
        cardField.length > 0 
          ? <div className="product-card_field">{cardField}</div>
          : <NotFoundProducts />
      }
    </>
  )
};

export default ProductCardField;
