import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewOption from "../components/ViewOptions";

describe("ViewOption", () => {
  it("ViewOption components", () => {
    render(
      <ViewOption
        activeMode={""}
        setActiveMode={function (value: React.SetStateAction<string>) {}}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("ViewOption btn", () => {
    const setActiveMode = jest.fn();
    render(<ViewOption activeMode={""} setActiveMode={setActiveMode} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(setActiveMode).toHaveBeenCalledTimes(2);
  });

  it("ViewOption snapshot", () => {
    const view = render(
      <ViewOption activeMode={""} setActiveMode={function () {}} />
    );
    expect(view).toMatchSnapshot();
  });

  it("ViewOption mode", () => {
    render(<ViewOption activeMode={"small"} setActiveMode={function () {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("view-mode_small active");
  });
});
