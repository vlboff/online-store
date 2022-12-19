import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/main.scss'

function App() {
  return (
  <>
    <Header isSearchBar={true} />
    <Footer />
  </>

  );
}

export default App;