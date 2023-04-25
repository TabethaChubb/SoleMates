import React from "react";
import { Sneaker } from "./interfaces/sneaker";
//import { SneakerBrand } from "./interfaces/sneaker";

interface WishListProp {
    sneakers: Sneaker[];
}

export function WishList({ sneakers }: WishListProp): JSX.Element {
    return (
        <div>
            <h3>My Wish List</h3>
            {sneakers.map((sneaker) => (
                <div key={sneaker.model} className="sneaker-card">
                    <img
                        src={sneaker.image}
                        alt={sneaker.model}
                        className="sneakerIMAGE"
                    />
                    <div>
                        <h4>{sneaker.model}</h4>
                        Brand:<p className="description">{sneaker.brand}</p>
                        Price:<p className="description"> {sneaker.price}</p>
                        Sizes:
                        <p className="description">{sneaker.size.join(", ")}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
