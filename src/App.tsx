import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import "./styles/main.scss";

function App() {
  return (
    <Routes>
    <Route path='/' element={<ProductsPage/>}/>
    <Route path='/cart' element={<ShoppingCartPage/>}/>
  </Routes>
  );
}

export default App;
