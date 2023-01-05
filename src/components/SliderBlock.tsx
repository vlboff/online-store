import React, { useEffect, useState } from "react";
import { products } from "./Products";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

interface ISliderBlock {
  name: string;
  setKeySliderState: React.Dispatch<React.SetStateAction<string>>;
  setValueSliderState: React.Dispatch<React.SetStateAction<number[]>>;
}

const SliderBlock = ({
  name,
  setKeySliderState,
  setValueSliderState,
}: ISliderBlock) => {
  let min: number = 0;
  let max: number = 0;

  const tempArr: number[] = [];
  products.map((item) => tempArr.push(item[name] as number));
  min = Math.min(...tempArr);
  max = Math.max(...tempArr);

  const [sliderValue, setSliderValue] = useState([min, max]);

  const handleChange = (sliderValue: React.SetStateAction<number[]>) => {
    setSliderValue(sliderValue);
  };

  useEffect(() => {
    setValueSliderState(() => sliderValue as number[]);
    setKeySliderState(() => name);
  }, [sliderValue]);

  return (
    <div className="slider_block">
      <h2>{name}</h2>
      <div className="range_items">
        <p>{sliderValue[0]}</p>
        <p className="line"></p>
        <p>{sliderValue[1]}</p>
      </div>
      <div className="range_slider">
        <Range
          range
          allowCross={false}
          defaultValue={[min, max]}
          min={min}
          max={max}
          onChange={
            handleChange as ((value: number | number[]) => void) | undefined
          }
        ></Range>
      </div>
    </div>
  );
};

export default SliderBlock;
