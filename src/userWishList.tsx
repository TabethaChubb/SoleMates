import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { Sneaker } from "./interfaces/sneaker";

interface WishListProp {
    sneakers: Sneaker[];
}

export function WishList({ sneakers }: WishListProp): JSX.Element {
    return (
        <div>
            <h3>My Wish List</h3>
            <ul>
                {sneakers.map((sneaker) => (
                    <li key={sneaker.model}>
                        <h3>{sneaker.image}</h3>
                        {sneaker.brand} - {sneaker.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
