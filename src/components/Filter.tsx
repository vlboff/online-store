import React from "react";
import FilterPoint from "./FilterPoint";
import { IProducts } from "./Products";
import data from "../data/data.json";

const products: IProducts[] = data.products;

interface IFilter {
  name: string;
  setProductsToShow: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

export interface IObject {
  [key: string]: number;
}

const Filter = ({ name, setProductsToShow }: IFilter) => {
  const counter = products.reduce(function (o: IObject, i: IProducts) {
    if (!o.hasOwnProperty(i[name] as keyof IProducts)) {
      o[i[name] as keyof IProducts] = 0;
    }
    o[i[name] as keyof IProducts]++;
    return o;
  }, {});

  return (
    <div className="filter_block">
      <h2>{name}</h2>
      <FilterPoint
        counter={counter}
        setProductsToShow={setProductsToShow}
        name={name}
      />
    </div>
  );
};

export default Filter;
