import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/UI/Button";

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<Button name={"name"} onClick={onClick} />);

  const button = screen.getByText("name");
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
