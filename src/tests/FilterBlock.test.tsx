import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterBlock from "../components/FilterBlock";

describe("FilterBlock tests", () => {
  it("Filter amount", () => {
    render(
      <FilterBlock
        setProductsToShow={function () {}}
        productsToShow={[]}
        setValueCategory={function () {}}
        setValueBrand={function () {}}
        setValuePrice={function () {}}
        setValueStock={function () {}}
        setValueSearch={function () {}}
        setValueSort={function () {}}
        setSearchedValue={function () {}}
        currentURL={""}
        searchedValue={""}
      />
    );

    const resetBtn = screen.getByText("Reset Filters");
    expect(resetBtn).toBeInTheDocument();
  });
});
