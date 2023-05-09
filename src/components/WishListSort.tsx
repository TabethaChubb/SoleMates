import React, { useState } from "react";
import { Sneaker } from "../interfaces/sneaker";
import { Form } from "react-bootstrap";

const FILTERS = ["Brand", "Model Name", "Price", "Color", "Size", "None"];

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
        <Form.Group controlId="sortSelect" className="sortDropdown">
            <Form.Label>Sort by:</Form.Label>
            <Form.Select value={currSort} onChange={updateSort}>
                {/* eslint-disable-next-line no-extra-parens*/}
                {FILTERS.map((property: string) => (
                    <option key={property} value={property}>
                        {property}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
}
