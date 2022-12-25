import React from "react";
import ViewOptions from "./ViewOptions";
import { useState, useRef } from "react";

interface ISortProducts {
  amount: number;
  chengeSelect: React.Dispatch<React.SetStateAction<string>>;
  valueSort: string;
  isBigViewMode: () => void;
}

const SortProducts = ({
  amount,
  chengeSelect,
  valueSort,
  isBigViewMode,
}: ISortProducts) => {
  const viewBig = useRef<HTMLDivElement>(null);
  const viewSmall = useRef<HTMLDivElement>(null);

  const [viewModeBig, setviewModeBig] = useState("view-mode_big");
  const [viewModeSmall, setviewModeSmall] = useState("view-mode_small");

  const handleClickModeBig = (event: React.MouseEvent<HTMLElement>) => {
    if (viewModeBig === "view-mode_big") {
      setviewModeBig("view-mode_big active");
      setviewModeSmall("view-mode_small");
      event.currentTarget.className = "view-mode_big active";
      if (viewSmall.current) viewSmall.current.className = "view-mode_small";
      isBigViewMode();
    }
  };

  const handleClickModeSmall = (event: React.MouseEvent<HTMLElement>) => {
    if (viewModeSmall === "view-mode_small") {
      setviewModeBig("view-mode_big");
      setviewModeSmall("view-mode_small active");
      event.currentTarget.className = "view-mode_small active";
      if (viewBig.current) viewBig.current.className = "view-mode_big";
      isBigViewMode();
    }
  };

  return (
    <div className="sort-products">
      <ViewOptions valueSort={valueSort} chengeSelect={chengeSelect} />
      <div className="amount-products">Found: {amount}</div>
      <div className="view-mode">
        <div
          className="view-mode_big active"
          onClick={handleClickModeBig}
          ref={viewBig}
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
          className="view-mode_small"
          onClick={handleClickModeSmall}
          ref={viewSmall}
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
