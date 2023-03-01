import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SliderBlock from "../components/SliderBlock";

describe("SliderBlock tests", () => {
  it("SliderBlock render", () => {
    render(
      <SliderBlock
        name={""}
        setKeySliderState={function () {}}
        setValueSliderState={function () {}}
        findMin={function () {
          return 10;
        }}
        findMax={function () {
          return 100;
        }}
        findCurrentMin={function () {
          return 10;
        }}
        findCurrentMax={function () {
          return 100;
        }}
      />
    );

    const valueMin = screen.getByText(10);
    const valueMax = screen.getByText(100);
    expect(valueMin).toBeInTheDocument();
    expect(valueMax).toBeInTheDocument();
  });

  it("SliderBlock focus", () => {
    render(
      <SliderBlock
        name={""}
        setKeySliderState={function () {}}
        setValueSliderState={function () {}}
        findMin={function () {
          return 10;
        }}
        findMax={function () {
          return 100;
        }}
        findCurrentMin={function () {
          return 10;
        }}
        findCurrentMax={function () {
          return 100;
        }}
      />
    );

    const sliders = screen.getAllByRole("slider");
    expect(sliders[0]).not.toHaveFocus();
    sliders[0].focus();
    expect(sliders[0]).toHaveFocus();
  });
});
