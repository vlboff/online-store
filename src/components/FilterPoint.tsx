import React, { useState, useEffect } from "react";
import { IObject } from "./Filter";
import { IProducts } from "./Products";
import data from "../data/data.json";

const products: IProducts[] = data.products;

interface IFilterPoint {
  counter: IObject;
  setProductsToShow: React.Dispatch<React.SetStateAction<IProducts[]>>;
  name: string;
}

const FilterPoint = ({ counter, setProductsToShow, name }: IFilterPoint) => {
  const [checkedState, setCheckedState] = useState(
    new Array(Object.keys(counter).length).fill(false)
  );

  function handleOnChange(position: number) {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

  const tempValueArr = checkedState.map((item, i) => {
    if (item) {
      return Object.keys(counter)[i];
    }
  });

  const valueArr = tempValueArr.filter((item) => {
    if (item) {
      return item;
    }
  });

  useEffect(() => {
    setProductsToShow(
      products.filter((item) => {
        if (valueArr.includes(item[name] as string) || valueArr.length < 1) {
          return item;
        }
      })
    );
  }, [checkedState]);

  const filterPoints = Object.entries(counter).map((item, i) => {
    return (
      <div key={i} className="filter_list_point">
        <input
          type="checkbox"
          id={item[0]}
          name={item[0]}
          onChange={() => handleOnChange(i)}
        />
        <label htmlFor={item[0]}>{item[0]}</label>
        <span>{`(${item[1]}/${item[1]})`}</span>
      </div>
    );
  });

  return <div className="filter_list">{filterPoints}</div>;
};

export default FilterPoint;
