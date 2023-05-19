import React from "react";
import { Sneaker } from "../interfaces/sneaker";
import { ShoeCard } from "./Shoe_Card";
//import { SneakerBrand } from "./interfaces/sneaker";

interface WishListProp {
    sneakers: Sneaker[];
}

export function WishList({ sneakers }: WishListProp): JSX.Element {
    return (
        <div className="sneaker-grid">
            {sneakers.map((sneaker) => {
                return (
                    <div key={sneaker.model}>
                        <ShoeCard sneaker={sneaker}></ShoeCard>
                    </div>
                );
            })}
        </div>
    );
}
