import React, { useState } from "react";
import FilterBlock from "./FilterBlock";
import Products from "./Products";
import data from "../data/data.json";
import { IProducts } from "./Products";

const products = data.products;

const Main = () => {
  const [dataArr, setDataArr] = useState<IProducts[]>(products);

  return (
    <main>
      <div className="wrapper main">
        <FilterBlock dataArr={dataArr} />
        <Products setDataArr={setDataArr} />
      </div>
    </main>
  );
};

export default Main;
