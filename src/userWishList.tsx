import React from "react";
import { Sneaker } from "./interfaces/sneaker";
//import { SneakerBrand } from "./interfaces/sneaker";

interface WishListProp {
    sneakers: Sneaker[];
}

export function WishList({ sneakers }: WishListProp): JSX.Element {
    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        sneaker: Sneaker
    ) => {
        event.dataTransfer.setData("application/json", JSON.stringify(sneaker));
    };

    return (
        <div className="sneaker-grid">
            <h3>My Wish List</h3>
            {sneakers.map((sneaker) => {
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
