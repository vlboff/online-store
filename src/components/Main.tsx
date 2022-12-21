import React from "react";
import FilterBlock from "./FilterBlock";
import Products from "./Products";

const Main = () => {
  return (
    <main>
      <div className="wrapper main">
        <FilterBlock />
        <Products />
      </div>
    </main>
  );
};

export default Main;
