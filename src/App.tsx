import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from "./components/Products";
import './styles/main.scss'

function App() {
  return (
  <>
    <Header isSearchBar={true} />
    <Products />
    <Footer />
  </>

  );
}

export default App;