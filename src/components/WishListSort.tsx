import React, { useState } from "react";
import { Sneaker } from "../interfaces/sneaker";
import { Form } from "react-bootstrap";

const FILTERS = [
    "model",
    "brand",
    "price",
    "selectedColor",
    "selectedSize",
    "None"
];

interface SortProp {
    sneakers: Sneaker[];
    onSortChange: (sort: string) => void;
}

export function WishListSort({ onSortChange }: SortProp): JSX.Element {
    //Local state allows the active sort to be displayed to user
    const [currSort, setSort] = useState<string>("None");

    function updateSort(event: React.ChangeEvent<HTMLSelectElement>) {
        const newSort = event.target.value;
        setSort(newSort);
        onSortChange(newSort);
    }

    return (
        <Form.Group controlId="sortSelect">
            <Form.Label>Wishlist Sort by:</Form.Label>
            <Form.Select value={currSort} onChange={updateSort}>
                {FILTERS.map((property: string) => (
                    <option key={property} value={property}>
                        {property}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
}
