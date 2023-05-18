import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ShoeForm } from "./AddShoe";

test("updates form inputs correctly", () => {
    render(<ShoeForm onAddShoe={jest.fn()} />);

    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    fireEvent.change(modelInput, { target: { value: "Nike Air Max" } });
    expect(modelInput.value).toBe("Nike Air Max");
});

test("calls onAddShoe with the correct shoe object", () => {
    const onAddShoeMock = jest.fn();
    render(<ShoeForm onAddShoe={onAddShoeMock} />);

    const addShoeButton = screen.getByText("Add Shoe") as HTMLButtonElement;
    fireEvent.click(addShoeButton);

    expect(onAddShoeMock).toHaveBeenCalledWith({
        model: "Nike Air Max",
        brand: "Nike",
        image: "https://example.com/image.jpg",
        price: "100",
        colors: "Red,Blue,White",
        sizes: "8,9,10"
    });
});
