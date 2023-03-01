import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterPoint from "../components/FilterPoint";
import userEvent from "@testing-library/user-event";

describe("FilterPoint", () => {
  it("FilterPoint check", () => {
    render(
      <FilterPoint
        counter={{ Apple: 3 }}
        filterCounter={{ Apple: 3 }}
        name={"Apple"}
        setKeyFilterState={function () {}}
        setValueFilterState={function () {}}
        chackboxState={function () {
          return [];
        }}
        isReset={false}
        setIsReset={function () {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("FilterPoint amount", () => {
    render(
      <FilterPoint
        counter={{ Apple: 3, Samsung: 2 }}
        filterCounter={{ Apple: 3, Samsung: 2 }}
        name={"Apple"}
        setKeyFilterState={function () {}}
        setValueFilterState={function () {}}
        chackboxState={function () {
          return [true];
        }}
        isReset={false}
        setIsReset={function () {}}
      />
    );

    const checkbox = screen.getAllByRole("checkbox");
    expect(checkbox).toHaveLength(2);
  });
});
