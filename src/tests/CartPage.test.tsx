import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingCart from "../components/ShoppingCart";
import { BrowserRouter } from "react-router-dom";

describe("Cart page test", () => {
  it("Is cart empty", () => {
    render(<BrowserRouter><ShoppingCart /></BrowserRouter>);
    screen.queryByTestId('buy-now-button');
    expect(screen.queryByTestId('buy-now-button')).not.toBeInTheDocument();
  });
});
