import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ShoeCard } from "./Shoe_Card";
import airmax from "../images/Airmax270.jpg";

describe("ShoeCard", () => {
    type SneakerBrand = "Nike" | "Puma" | "Adidas";
    const Sneaker = {
        model: "Nike Air Max 270",
        colors: ["Red", "Blue", "Green"],
        selectedColor: "",
        brand: "Nike" as SneakerBrand,
        size: [8, 9, 10],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: airmax
    };

    test("renders the sneaker details", () => {
        const { getByText, getByLabelText } = render(
            <ShoeCard sneaker={Sneaker} />
        );

        // Check if the sneaker details are rendered correctly
        expect(getByText("Nike Air Max 270")).toBeInTheDocument();
        expect(getByText("price: $100")).toBeInTheDocument();
        expect(getByLabelText("Select Color:")).toBeInTheDocument();
        expect(getByLabelText("Select Size:")).toBeInTheDocument();
    });

    test("updates the selected color", () => {
        const { getByLabelText } = render(<ShoeCard sneaker={Sneaker} />);

        // Select a color
        const colorSelect = getByLabelText("Select Color:");
        fireEvent.change(colorSelect, { target: { value: "Red" } });

        // Check if the color is updated in the component's state
        expect(Sneaker.selectedColor).toBe("Red");
    });

    test("updates the selected size", () => {
        const { getByLabelText } = render(<ShoeCard sneaker={Sneaker} />);

        // Select a size
        const sizeSelect = getByLabelText("Select Size:");
        fireEvent.change(sizeSelect, { target: { value: "9" } });

        // Check if the size is updated in the component's state
        expect(Sneaker.selectedSize).toBe(9);
    });
    /**
    test("displays the correct price format", () => {
        const { getByText } = render(<ShoeCard sneaker={Sneaker} />);

        // Check if the price is displayed with the correct format
        const priceElement = getByText("price: $100");
        expect(priceElement).toBeInTheDocument();
    });

    test("updates the selected color and size simultaneously", () => {
        const { getByLabelText } = render(<ShoeCard sneaker={Sneaker} />);

        // Select a color
        const colorSelect = getByLabelText("Select Color:");
        fireEvent.change(colorSelect, { target: { value: "Red" } });

        // Select a size
        const sizeSelect = getByLabelText("Select Size:");
        fireEvent.change(sizeSelect, { target: { value: "9" } });

        // Check if the color and size are updated in the component's state
        expect(Sneaker.selectedColor).toBe("Red");
        expect(Sneaker.selectedSize).toBe(9);
    }); */
});
