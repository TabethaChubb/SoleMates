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
            {sneakers.map((sneakers) => {
                return (
                    <div key={sneakers.model}>
                        <ShoeCard sneaker={sneakers}></ShoeCard>
                    </div>
                    // <div
                    //     key={sneaker.model}
                    //     className="sneaker-card"
                    //     draggable="true"
                    //     onDragStart={(event) => handleDragStart(event, sneaker)}
                    // >
                    //     <img
                    //         src={sneaker.image}
                    //         alt={sneaker.model}
                    //         className="sneakerIMAGE"
                    //     />
                    //     <div>
                    //         <h4>{sneaker.model}</h4>
                    //         Brand:<p className="description">{sneaker.brand}</p>
                    //         Price:
                    //         <p className="description"> {sneaker.price}</p>
                    //         Sizes:
                    //         <p className="description">
                    //             {sneaker.size.join(", ")}
                    //         </p>
                    //     </div>
                    // </div>
                );
            })}
        </div>
    );
}
