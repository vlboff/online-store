import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BuyProductsForm from "../components/BuyProductsForm";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("BuyProductsForm test", () => {
  it("Test inputName", () => {
    render(<BrowserRouter><BuyProductsForm /></BrowserRouter>);
    const inputName = screen.getByPlaceholderText(/Full name/i);
    act(() => {
      fireEvent.change(inputName, {target: {value: 'Artyom'}});
    });
    expect((inputName as HTMLInputElement).value).toBe('Artyom');
  });

  it("Test inputEmail", async () => {
    render(<BrowserRouter><BuyProductsForm /></BrowserRouter>);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    await act(() => {
      fireEvent.change(inputEmail, {target: {value: 'dajkcsjk@mail.com'}});
    });
    expect((inputEmail as HTMLInputElement)).toHaveClass('form__item__input');
  });

  it("Test inputCVV", async () => {
    render(<BrowserRouter><BuyProductsForm /></BrowserRouter>);
    const inputCVV = screen.getByPlaceholderText(/CVV/i);
    await act(() => {
      fireEvent.change(inputCVV, {target: {value: '5555'}});
    });
    expect((inputCVV as HTMLInputElement).value).not.toBe('5555');
  });
});
