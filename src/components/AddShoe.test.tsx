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

test("renders with the correct title", () => {
    render(<ShoeForm onAddShoe={jest.fn()} />);

    const title = screen.getByText("Add Shoe to Inventory");
    expect(title).toBeInTheDocument();
});

test("renders the correct label text for each input field", () => {
    render(<ShoeForm onAddShoe={jest.fn()} />);

    const modelLabel = screen.getByLabelText("Model:") as HTMLLabelElement;
    expect(modelLabel).toBeInTheDocument();

    const brandLabel = screen.getByLabelText("Brand:") as HTMLLabelElement;
    expect(brandLabel).toBeInTheDocument();

    const imageLabel = screen.getByLabelText("Image URL:") as HTMLLabelElement;
    expect(imageLabel).toBeInTheDocument();

    const priceLabel = screen.getByLabelText("Price:") as HTMLLabelElement;
    expect(priceLabel).toBeInTheDocument();

    const colorsLabel = screen.getByLabelText(
        "Colors (comma-separated):"
    ) as HTMLLabelElement;
    expect(colorsLabel).toBeInTheDocument();

    const sizesLabel = screen.getByLabelText(
        "Sizes (comma-separated):"
    ) as HTMLLabelElement;
    expect(sizesLabel).toBeInTheDocument();
});
