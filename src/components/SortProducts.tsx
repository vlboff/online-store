import React from "react";

interface ISortProducts {
  amount: number;
  sortValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortProducts = ({ amount, sortValue }: ISortProducts) => {
  return (
    <div className="sort-products">
      <select className="sort-bar" name="sort" id="sort" onChange={sortValue}>
        <option disabled selected>
          Sort options:
        </option>
        <option value="price-ASC">Sort by price ASC</option>
        <option value="price-DESC">Sort by price DESC</option>
        <option value="rating-ASC">Sort by rating ASC</option>
        <option value="rating-DESC">Sort by rating DESC</option>
      </select>
      <div className="amount-products">Found: {amount}</div>
      <div className="view-mode">
        <div className="view-mode_big">
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
        <div className="view-mode_small">
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
