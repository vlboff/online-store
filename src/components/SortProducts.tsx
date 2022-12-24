import React from "react";
import { useState, useRef } from "react";

interface ISortProducts {
  amount: number;
  sortValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isBigViewMode: () => void;
}

const SortProducts = ({ amount, sortValue, isBigViewMode }: ISortProducts) => {
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
      <select
        className="sort-bar"
        name="sort"
        id="sort"
        defaultValue={"sort-options"}
        onChange={sortValue}
      >
        <option disabled value="sort-options">
          Sort options:
        </option>
        <option value="price-ASC">Sort by price ASC</option>
        <option value="price-DESC">Sort by price DESC</option>
        <option value="rating-ASC">Sort by rating ASC</option>
        <option value="rating-DESC">Sort by rating DESC</option>
      </select>
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
