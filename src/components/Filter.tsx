import React from "react";
import FilterPoint from "./FilterPoint";
import { IProducts } from "./Products";
import data from "../data/data.json";

const products: IProducts[] = data.products;

interface IFilter {
  name: string;
  setKeyFilterState: React.Dispatch<React.SetStateAction<string>>;
  setValueFilterState: React.Dispatch<React.SetStateAction<string[]>>;
  productsToShow: IProducts[];
}

export interface IObject {
  [key: string]: number;
}

const Filter = ({
  name,
  setKeyFilterState,
  setValueFilterState,
  productsToShow,
}: IFilter) => {
  const counter = products.reduce(function (o: IObject, i: IProducts) {
    if (!o.hasOwnProperty(i[name] as keyof IProducts)) {
      o[i[name] as keyof IProducts] = 0;
    }
    o[i[name] as keyof IProducts]++;
    return o;
  }, {});

  const filterCounter = productsToShow.reduce(function (
    o: IObject,
    i: IProducts
  ) {
    if (!o.hasOwnProperty(i[name] as keyof IProducts)) {
      o[i[name] as keyof IProducts] = 0;
    }
    o[i[name] as keyof IProducts]++;
    return o;
  },
  {});

  return (
    <div className="filter_block">
      <h2>{name}</h2>
      <FilterPoint
        counter={counter}
        filterCounter={filterCounter}
        name={name}
        setKeyFilterState={setKeyFilterState}
        setValueFilterState={setValueFilterState}
      />
    </div>
  );
};

export default Filter;
