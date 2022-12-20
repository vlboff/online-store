import React from "react";

interface IFilterListPoint {
  filterItem: string;
  total: number;
}

const FilterListPoint = ({ filterItem, total }: IFilterListPoint) => {
  return (
    <div className="filter_list_point">
      <input type="checkbox" id={filterItem} />
      <label htmlFor={filterItem}>{filterItem}</label>
      <span>{`(${total}/${total})`}</span>
    </div>
  );
};

export default FilterListPoint;
