import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ShoeForm } from "./AddShoe";

test("updates form inputs correctly", () => {
    render(<ShoeForm onAddShoe={jest.fn()} onCancel={jest.fn()} />);

    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    fireEvent.change(modelInput, { target: { value: "Nike Air Max" } });
    expect(modelInput.value).toBe("Nike Air Max");
});

test("clears form inputs after submission", () => {
    render(<ShoeForm onAddShoe={jest.fn()} onCancel={jest.fn()} />);

    const addShoeButton = screen.getByText("Add Shoe") as HTMLButtonElement;
    fireEvent.click(addShoeButton);

    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    expect(modelInput.value).toBe("");
});

test("renders with the correct title", () => {
    render(<ShoeForm onAddShoe={jest.fn()} onCancel={jest.fn()} />);

    const title = screen.getByText("Add Shoe to Inventory");
    expect(title).toBeInTheDocument();
});

test("renders the correct label text for each input field", () => {
    render(<ShoeForm onAddShoe={jest.fn()} onCancel={jest.fn()} />);

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

test("calls onAddShoe one time when submitted or cancel once if it is clicked", () => {
    const onAddShoeMock = jest.fn();
    const cancelShoeMock = jest.fn();
    render(<ShoeForm onAddShoe={onAddShoeMock} onCancel={cancelShoeMock} />);

    const addShoeButton = screen.getByText("Add Shoe") as HTMLButtonElement;
    fireEvent.click(addShoeButton);

    expect(onAddShoeMock).toHaveBeenCalledTimes(1);
});

test("calls onCancel when 'Cancel' button is clicked", () => {
    const onCancelMock = jest.fn();
    render(<ShoeForm onAddShoe={jest.fn()} onCancel={onCancelMock} />);

    const cancelButton = screen.getByText("Cancel") as HTMLButtonElement;
    fireEvent.click(cancelButton);

    expect(onCancelMock).toHaveBeenCalledTimes(1);
});

test("resets form inputs when 'Cancel' button is clicked", () => {
    render(<ShoeForm onAddShoe={jest.fn()} onCancel={jest.fn()} />);

    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    const priceInput = screen.getByLabelText("Price:") as HTMLInputElement;
    const colorsInput = screen.getByLabelText(
        "Colors (comma-separated):"
    ) as HTMLInputElement;
    const sizesInput = screen.getByLabelText(
        "Sizes (comma-separated):"
    ) as HTMLInputElement;

    fireEvent.change(modelInput, { target: { value: "Nike Air Max" } });
    fireEvent.change(priceInput, { target: { value: "100" } });
    fireEvent.change(colorsInput, { target: { value: "Red, Blue" } });
    fireEvent.change(sizesInput, { target: { value: "8, 9" } });

    const cancelButton = screen.getByText("Cancel") as HTMLButtonElement;
    fireEvent.click(cancelButton);

    expect(modelInput.value).toBe("");
    expect(priceInput.value).toBe("");
    expect(colorsInput.value).toBe("");
    expect(sizesInput.value).toBe("");
});
test("calls onAddShoe and clears form inputs after submission", () => {
    const onAddShoeMock = jest.fn();
    const onCancelMock = jest.fn();
    render(<ShoeForm onAddShoe={onAddShoeMock} onCancel={onCancelMock} />);

    const addShoeButton = screen.getByText("Add Shoe") as HTMLButtonElement;
    fireEvent.click(addShoeButton);

    expect(onAddShoeMock).toHaveBeenCalledTimes(1);
    expect(onCancelMock).not.toHaveBeenCalled();

    // Check if form inputs are cleared
    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    const priceInput = screen.getByLabelText("Price:") as HTMLInputElement;
    const imageInput = screen.getByLabelText("Image URL:") as HTMLInputElement;
    const colorsInput = screen.getByLabelText(
        "Colors (comma-separated):"
    ) as HTMLInputElement;
    const sizesInput = screen.getByLabelText(
        "Sizes (comma-separated):"
    ) as HTMLInputElement;

    expect(modelInput.value).toBe("");
    expect(priceInput.value).toBe("");
    expect(imageInput.value).toBe("");
    expect(colorsInput.value).toBe("");
    expect(sizesInput.value).toBe("");
});

test("updates form inputs correctly", () => {
    render(<ShoeForm onAddShoe={jest.fn()} onCancel={jest.fn()} />);

    const modelInput = screen.getByLabelText("Model:") as HTMLInputElement;
    fireEvent.change(modelInput, { target: { value: "Nike Air Max" } });
    expect(modelInput.value).toBe("Nike Air Max");

    const brandInput = screen.getByLabelText("Brand:") as HTMLInputElement;
    fireEvent.change(brandInput, { target: { value: "Nike" } });
    expect(brandInput.value).toBe("Nike");

    const imageInput = screen.getByLabelText("Image URL:") as HTMLInputElement;
    fireEvent.change(imageInput, {
        target: { value: "https://example.com/image.jpg" }
    });
    expect(imageInput.value).toBe("https://example.com/image.jpg");

    const priceInput = screen.getByLabelText("Price:") as HTMLInputElement;
    fireEvent.change(priceInput, { target: { value: "99.99" } });
    expect(priceInput.value).toBe("99.99");

    const colorsInput = screen.getByLabelText(
        "Colors (comma-separated):"
    ) as HTMLInputElement;
    fireEvent.change(colorsInput, { target: { value: "Red, Blue, Green" } });
    expect(colorsInput.value).toBe("Red, Blue, Green");

    const sizesInput = screen.getByLabelText(
        "Sizes (comma-separated):"
    ) as HTMLInputElement;
    fireEvent.change(sizesInput, { target: { value: "7, 8, 9" } });
    expect(sizesInput.value).toBe("7, 8, 9");
});
