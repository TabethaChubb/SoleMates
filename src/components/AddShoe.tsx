// ShoeForm.tsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface ShoeFormProps {
    onAddShoe: (newShoe: NewShoe) => void;
    onCancel: () => void;
}

export interface NewShoe {
    model: string;
    brand: string;
    price: string;
    colors: string;
    sizes: string;
}

export function ShoeForm({ onAddShoe, onCancel }: ShoeFormProps): JSX.Element {
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [colors, setColors] = useState("");
    const [sizes, setSizes] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newShoe: NewShoe = {
            model,
            brand,
            price,
            colors,
            sizes
        };

        onAddShoe(newShoe);

        setModel("");
        setPrice("");
        setColors("");
        setSizes("");
    };

    const handleCancel = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCancel();

        setModel("");
        setPrice("");
        setColors("");
        setSizes("");
    };

    return (
        <div className="add-shoe-form">
            <h2>Add Shoe to Inventory</h2>
            <Form onSubmit={handleSubmit} onReset={handleCancel}>
                <Form.Group controlId="modelInput">
                    <Form.Label>Model:</Form.Label>
                    <Form.Control
                        type="text"
                        value={model}
                        onChange={(event) => setModel(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="brandlInput">
                    <Form.Label>Brand:</Form.Label>
                    <Form.Control
                        type="text"
                        value={brand}
                        onChange={(event) => setBrand(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="priceInput">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        type="text"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="colorsInput">
                    <Form.Label>Colors (comma-separated):</Form.Label>
                    <Form.Control
                        type="text"
                        value={colors}
                        onChange={(event) => setColors(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="sizesInput">
                    <Form.Label>Sizes (comma-separated):</Form.Label>
                    <Form.Control
                        type="text"
                        value={sizes}
                        onChange={(event) => setSizes(event.target.value)}
                    />
                </Form.Group>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="button-container"
                >
                    <Button
                        style={{ backgroundColor: "red", marginRight: 10 }}
                        variant="primary"
                        type="reset"
                    >
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Add Shoe
                    </Button>
                </div>
            </Form>
        </div>
    );
}
