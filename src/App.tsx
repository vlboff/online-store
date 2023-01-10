import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import "./styles/main.scss";

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductsPage />} />
      <Route path='?modal=true' element={<ProductsPage />} />
      <Route path='/cart' element={<ShoppingCartPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
