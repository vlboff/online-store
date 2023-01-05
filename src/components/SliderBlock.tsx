import React from "react";
import { products } from "./Products";

interface ISliderBlock {
  name: string;
}

const SliderBlock = ({ name }: ISliderBlock) => {
  let min: number = 0;
  let max: number = 0;

  if (name === "price") {
    const tempArr: number[] = [];
    products.map((item) => tempArr.push(item.price));
    min = Math.min(...tempArr);
    max = Math.max(...tempArr);
  } else {
    const tempArr: number[] = [];
    products.map((item) => tempArr.push(item.stock));
    min = Math.min(...tempArr);
    max = Math.max(...tempArr);
  }

  return (
    <div className="slider_block">
      <h2>{name}</h2>
      <div className="range_items">
        <p>{min}</p>
        <p className="line"></p>
        <p>{max}</p>
      </div>
      <div className="range_slider">
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
};

export default SliderBlock;
