import React from "react";
import { IObject } from "./Filter";

interface IFilterPoint {
  counter: IObject;
}

const FilterPoint = ({ counter }: IFilterPoint) => {
  const filterPoints = Object.entries(counter).map((item) => {
    return (
      <div className="filter_list_point">
        <input type="checkbox" id={item[0]} />
        <label htmlFor={item[0]}>{item[0]}</label>
        <span>{`(${item[1]}/${item[1]})`}</span>
      </div>
    );
  });

  return <div className="filter_list">{filterPoints}</div>;
};

export default FilterPoint;
