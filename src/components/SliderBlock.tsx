import React, { useEffect, useState } from "react";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

interface ISliderBlock {
  name: string;
  setKeySliderState: React.Dispatch<React.SetStateAction<string>>;
  setValueSliderState: React.Dispatch<React.SetStateAction<number[]>>;
  findMin: (key: string) => number;
  findMax: (key: string) => number;
  findCurrentMin: (key: string) => number;
  findCurrentMax: (key: string) => number;
}

const SliderBlock = ({
  name,
  setKeySliderState,
  setValueSliderState,
  findMin,
  findMax,
  findCurrentMin,
  findCurrentMax,
}: ISliderBlock) => {
  const [sliderValue, setSliderValue] = useState([
    findMin(name),
    findMax(name),
  ]);

  useEffect(() => {
    setValueSliderState(() => sliderValue as number[]);
    setKeySliderState(() => name);
  }, [sliderValue]);

  return (
    <div className="slider_block">
      <h2>{name}</h2>
      <div className="range_items">
        <p>{findCurrentMin(name)}</p>
        <p className="line"></p>
        <p>{findCurrentMax(name)}</p>
      </div>
      <div className="range_slider">
        <Range
          range
          allowCross={false}
          defaultValue={[findMin(name), findMax(name)]}
          min={findMin(name)}
          max={findMax(name)}
          onChange={
            setSliderValue as ((value: number | number[]) => void) | undefined
          }
          value={[findCurrentMin(name), findCurrentMax(name)]}
        ></Range>
      </div>
    </div>
  );
};

export default SliderBlock;
