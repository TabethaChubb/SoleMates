import { useState } from "react";
import { Sneaker } from "./interfaces/sneaker";
import React from "react";
import R1 from "../src/images/airf.jpg";
import two from "../src/images/270.jpg";
import Airmax270 from "../src/images/Airmax270.png";

const inventory: Sneaker[] = [
    {
        model: "Air Force",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 90,
        outOfStock: false,
        image: R1
    },
    {
        model: " Air Max 270",
        colors: ["white", "black", "Red", "Light Blue", "orange", "purple"],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 130,
        outOfStock: false,
        image: Airmax270
    },
    {
        model: " Air Max 90",
        colors: [
            "white",
            "black",
            "Red",
            "Purpele",
            "pink",
            "purlpe",
            "Beige",
            "yellow"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 95,
        outOfStock: false,
        image: two
    },
    {
        model: "Jordan 5",
        colors: [
            "white",
            "White Black",
            "Red-black",
            "Red",
            "Light Blue",
            "orange"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 250,
        outOfStock: false,
        image: two
    },
    {
        model: "Jordan True Flight",
        colors: [
            "white",
            "White Black",
            "Red-black",
            "Red",
            "Light Blue",
            "orange",
            "Black-Metallic"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 200,
        outOfStock: false,
        image: two
    },
    {
        model: "Vapor Max",
        colors: [
            "white",
            "University Red",
            "Red-black",
            "Silver",
            "orange",
            "Green"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 210,
        outOfStock: false,
        image: two
    },
    {
        model: "Jordan 9",
        colors: [
            "white",
            "University Blue",
            "Red-black",
            "Blue",
            "Orange",
            "Cool grey"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 300,
        outOfStock: false,
        image: two
    },
    {
        model: "Jordan 11",
        colors: [
            "white",
            "University Red",
            "Red-black",
            "Black",
            "orange-White",
            "Silver"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 350,
        outOfStock: false,
        image: two
    },
    {
        model: "Jordan 12",
        colors: [
            "white",
            "University Gold",
            "Red-black",
            "Indigo",
            "orange",
            "Green"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 180,
        outOfStock: false,
        image: two
    },
    {
        model: "Huarache",
        colors: ["white", "black", "Phantom"],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 250,
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
