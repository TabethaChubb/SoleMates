/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Sneaker } from "../interfaces/sneaker";
import { Form } from "react-bootstrap";

interface shoeCardProp {
    sneaker: Sneaker;
}
//In order to update the list with selectedSize and selectedColor,
//the prop has to be a list of sneakers so that an entirely new list
//can be made with the changes of the selectedSize and color
//and then passed back to the display. Important to have these properties
//so they can be transfered onto wishlist correctly.

export function ShoeCard({ sneaker }: shoeCardProp): JSX.Element {
    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        sneaker: Sneaker
    ) => {
        event.dataTransfer.setData("application/json", JSON.stringify(sneaker));
    };
    const [color, setColor] = useState<string>("");
    function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedColor = event.target.value;
        setColor(selectedColor);
        sneaker.selectedColor = selectedColor;
    }
    const [size, setSize] = useState<number>(NaN);
    function updateSize(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedSize = parseInt(event.target.value);
        setSize(selectedSize);
        sneaker.selectedSize = selectedSize;
    }
    return (
        <div>
            <div id="sneakerpage"></div>
            <div
                className="productcard"
                draggable="true"
                onDragStart={(event) => handleDragStart(event, sneaker)}
            >
                <img src={sneaker.image}></img>
                <h3>Sneaker Name: {sneaker.model}</h3>
                <p className="price">price: ${sneaker.price}</p>
                <Form.Group controlId="colorSelect">
                    <Form.Label>Select Color:</Form.Label>
                    <Form.Select value={color} onChange={updateColor}>
                        {sneaker.colors.map((color: string) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="sizeSelect">
                    <Form.Label>Select Size:</Form.Label>
                    <Form.Select value={size} onChange={updateSize}>
                        {sneaker.size.map((sizes: number) => (
                            <option key={sizes} value={sizes}>
                                {sizes}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}
