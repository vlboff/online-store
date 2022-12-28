import React from "react";
import ViewOptions from "./ViewOptions";

export enum ActiveMode {
  big = "big",
  small = "small",
}

interface ISortProducts {
  amount: number;
  setValueSort: React.Dispatch<React.SetStateAction<string>>;
  valueSort: string;
  activeMode: string;
  setActiveMode: React.Dispatch<React.SetStateAction<ActiveMode>>;
}

const SortProducts = ({
  amount,
  setValueSort,
  valueSort,
  activeMode,
  setActiveMode,
}: ISortProducts) => {
  const handleClickModeBig = (event: React.MouseEvent<HTMLElement>) => {
    setActiveMode(ActiveMode.big);
  };

  const handleClickModeSmall = (event: React.MouseEvent<HTMLElement>) => {
    setActiveMode(ActiveMode.small);
  };

  return (
    <div className="sort-products">
      <ViewOptions valueSort={valueSort} setValueSort={setValueSort} />
      <div className="amount-products">Found: {amount}</div>
      <div className="view-mode">
        <div
          className={`view-mode_big ${
            activeMode === ActiveMode.big ? " active" : ""
          }`}
          onClick={handleClickModeBig}
        >
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
          <div className="view-mode_big-sqare"></div>
        </div>
        <div
          className={`view-mode_small ${
            activeMode === ActiveMode.small ? " active" : ""
          }`}
          onClick={handleClickModeSmall}
        >
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
          <div className="view-mode_small-sqare"></div>
        </div>
      </div>
    </div>
  );
};

export default SortProducts;
