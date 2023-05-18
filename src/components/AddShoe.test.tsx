import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ShoeForm } from "./AddShoe";

test("updates form inputs correctly", () => {
    render(<ShoeForm onAddShoe={jest.fn()} />);

    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    fireEvent.change(modelInput, { target: { value: "Nike Air Max" } });
    expect(modelInput.value).toBe("Nike Air Max");
});

test("clears form inputs after submission", () => {
    render(<ShoeForm onAddShoe={jest.fn()} />);

    const addShoeButton = screen.getByText("Add Shoe") as HTMLButtonElement;
    fireEvent.click(addShoeButton);

    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    expect(modelInput.value).toBe("");
});
