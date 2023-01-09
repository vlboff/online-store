import React from "react";
import SortOptions from "./SortOptions";
import ViewOptions from "./ViewOptions";
import { ActiveMode } from "../interfaces";

interface ISortProducts {
  setValueSort: React.Dispatch<React.SetStateAction<string>>;
  valueSort: string;
  activeMode: string;
  setActiveMode: React.Dispatch<React.SetStateAction<ActiveMode>>;
}

const SortProducts = ({
  setValueSort,
  valueSort,
  activeMode,
  setActiveMode,
}: ISortProducts) => {
  return (
    <div className="sort-products">
      <SortOptions valueSort={valueSort} setValueSort={setValueSort} />
      <ViewOptions activeMode={activeMode} setActiveMode={setActiveMode} />
    </div>
  );
};

export default SortProducts;
