import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShoppingCart from '../components/ShoppingCart';

function ShoppingCartPage() {
  return (
    <>
      <Header isSearchBar={false} />
      <ShoppingCart />
      <Footer />
    </>
  )
}

export default ShoppingCartPage;