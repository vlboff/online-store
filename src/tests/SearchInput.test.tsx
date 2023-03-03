import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "../components/UI/SearchBar";

describe("Cart page test", () => {
  it("Is cart empty", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/Search on OnlineStore/i);
    expect(input).toBeVisible();
  });
});
