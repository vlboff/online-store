import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Product from '../components/Product';


function ProductPage() {
  const params = useParams(); 
  return (
    <>
      <Header isSearchBar={false} />
      <Product id={Number(params.id)}/>
      <Footer />
    </>
  )
}

export default ProductPage;