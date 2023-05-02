import { useState } from "react";
import { Sneaker } from "./interfaces/sneaker";
import React from "react";
import R1 from "../src/images/R1.png";
import two from "../src/images/270.jpg";

const inventory: Sneaker[] = [
    {
        model: "R1",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        brand: "Nike",
        size: [7, 8, 9, 10, 11, 12],
        price: 90,
        outOfStock: false,
        image: R1
    },
    {
        model: "270",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        brand: "Nike",
        size: [7, 8, 9, 10, 11, 12],
        price: 130,
        outOfStock: false,
        image: two
    }
];

export function AdiList(): JSX.Element {
    const [allSneaks] = useState<Sneaker[]>(inventory);
    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        sneaker: Sneaker
    ) => {
        event.dataTransfer.setData("application/json", JSON.stringify(sneaker));
    };
    return (
        <div className="sneaker-grid">
            {allSneaks.map((sneaker) => {
                return (
                    <div
                        key={sneaker.model}
                        className="sneaker-card"
                        draggable="true"
                        onDragStart={(event) => handleDragStart(event, sneaker)}
                    >
                        <img
                            src={sneaker.image}
                            alt={sneaker.model}
                            className="sneakerIMAGE"
                        />
                        <div>
                            <h4>{sneaker.model}</h4>
                            Brand:<p className="description">{sneaker.brand}</p>
                            Price:
                            <p className="description"> {sneaker.price}</p>
                            Sizes:
                            <p className="description">
                                {sneaker.size.join(", ")}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
