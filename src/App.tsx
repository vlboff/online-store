import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header isSearchBar={true} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
