import React from "react";
import FilterListPoint from "./FilterListPoint";
import data from "../data/data.json";

const products = data.products;

interface IFilterList {
  name: string;
}

const FilterList = ({ name }: IFilterList) => {
  const categories: string[] = [];
  const brands: string[] = [];

  products.map((item) => {
    if (name === "category") {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !categories.includes(item.category)
        ? categories.push(item.category)
        : null;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !brands.includes(item.brand) ? brands.push(item.brand) : null;
    }
  });

  let filterListPoint;
  if (name === "category") {
    filterListPoint = categories.map((item) => {
      let total = data.products.filter((i) => i.category === item).length;
      return <FilterListPoint filterItem={item} total={total} />;
    });
  } else {
    filterListPoint = brands.map((item) => {
      let total = data.products.filter((i) => i.brand === item).length;
      return <FilterListPoint filterItem={item} total={total} />;
    });
  }

  return (
    <div className="filter_block">
      <h2>{name}</h2>
      <div className="filter_list">{filterListPoint}</div>
    </div>
  );
};

export default FilterList;
