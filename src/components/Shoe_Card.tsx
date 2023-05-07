import React from "react";
import { Sneaker } from "../interfaces/sneaker";

interface shoeCardProp {
    sneaker: Sneaker;
}

export function ShoeCard({ sneaker }: shoeCardProp): JSX.Element {
    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        sneaker: Sneaker
    ) => {
        event.dataTransfer.setData("application/json", JSON.stringify(sneaker));
    };

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
                <h4>Sneaker Brand: {sneaker.brand}</h4>
                <p className="price">price: {sneaker.price}</p>
            </div>
        </div>
    );
}
