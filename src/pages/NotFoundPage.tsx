import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NotFound from '../components/NotFound';

function NotFoundPage() {
  return (
    <>
      <Header isSearchBar={true} />
      <NotFound/>
      <Footer />
    </>
  )
}

export default NotFoundPage;