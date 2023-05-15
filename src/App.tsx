/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import nikeAirMax from "../src/images/anthony-a-JldH_vLwdYs-unsplash.jpg";
import adidas from "../src/images/1.png";
import nike from "../src/images/2.png";
import puma from "../src/images/3.png";
import { Sneaker } from "./interfaces/sneaker";
import { WishList } from "./components/userWishList";
import { ShoeCard } from "./components/Shoe_Card";
import AdidasSneaks from "./AddiSneaks";
import NikeSneaks from "./NikeSneaks";
import PummaSneaks from "./Pumma";
import MainInventory from "./CentralList";
import { WishListSort } from "./components/WishListSort";

function App(): JSX.Element {
    const [currList, setWishList] = useState<Sneaker[]>([]);
    const [currCentralList, setCentralList] =
        useState<Sneaker[]>(MainInventory);
    const [sort, setSort] = useState<string>("");
    const adidasList = currCentralList.filter(
        (sneaker: Sneaker) => sneaker.brand === "Adidas"
    );
    const nikeList = currCentralList.filter(
        (sneaker: Sneaker) => sneaker.brand === "Nike"
    );
    const pumaList = currCentralList.filter(
        (sneaker: Sneaker) => sneaker.brand === "Puma"
    );

    //UserList sort component
    const handleSortChange = (selectedSort: string) => {
        setSort(selectedSort);
    };
    const sortedWishList = currList.sort((a, b) => {
        if (sort === "Brand") {
            return a.brand.localeCompare(b.brand);
        } else if (sort === "Model Name") {
            return a.model.localeCompare(b.model);
        } else if (sort === "Price") {
            return a.price - b.price;
        } else if (sort === "Color") {
            return a.selectedColor.localeCompare(b.selectedColor);
        } else if (sort === "Size") {
            return a.selectedSize - b.selectedSize;
        } else {
            return 0; // Default behavior: no sorting
        }
    });

    //Adds sneakers to user wishlist
    const handleAddDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedSneaker = JSON.parse(
            event.dataTransfer.getData("application/json")
        ) as Sneaker;
        setWishList([...currList, droppedSneaker]);
    };
    //Deletes sneakers from user wishlist
    const handleDeleteDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedSneaker = JSON.parse(
            event.dataTransfer.getData("application/json")
        ) as Sneaker;
        setWishList(
            currList.filter(
                (shoe: Sneaker): boolean => shoe.model !== droppedSneaker.model
            )
        );
    };
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    return (
        <div className="App">
            <head>
                <title>Navpage mockup</title>
            </head>
            <body>
                <NavBar></NavBar>
                <nav className="secondary">
                    <ul>
                        <li>
                            <div
                                className="wishlistAddDrop-Zone"
                                onDrop={handleAddDrop}
                                onDragOver={handleDragOver}
                            >
                                Drop Shoe to ADD to Wishlist ⭐
                            </div>
                        </li>
                        <li>
                            <div
                                className="wishlistDeleteDrop-Zone"
                                onDrop={handleDeleteDrop}
                                onDragOver={handleDragOver}
                            >
                                Drop Shoe to DELETE from Wishlist ⭐
                            </div>
                        </li>
                    </ul>
                </nav>
                <header id="homepage">
                    <div className="bg">
                        <div className="content">
                            <div className="kolom">
                                <div className="a">
                                    <img src={adidas} />
                                </div>
                                <div className="b">
                                    <a href="#adidas">ADIDAS</a>
                                </div>
                            </div>
                            <div className="kolom">
                                <div className="a">
                                    <img src={nike} />
                                </div>
                                <div className="b">
                                    <a href="#nike">NIKE</a>
                                </div>
                            </div>
                            <div className="kolom">
                                <div className="a">
                                    <img src={puma} />
                                </div>
                                <div className="b">
                                    <a href="#puma">PUMA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <footer>
                    <div id="adidas">ADIDAS</div>
                </footer>
                <footer className="ADIDAS">
                    {adidasList.map((item, index) => (
                        <div key={index}>
                            <ShoeCard sneaker={item}></ShoeCard>
                        </div>
                    ))}
                    <div className="drop"></div>
                </footer>
                <footer>
                    <div id="nike">NIKE</div>
                </footer>
                <footer id="nike" className="NIKE">
                    {nikeList.map((item, index) => (
                        <div key={index}>
                            <ShoeCard sneaker={item}></ShoeCard>
                        </div>
                    ))}
                    <div className="drop"></div>
                </footer>
                <footer>
                    <div id="puma">PUMA</div>
                </footer>
                <footer id="puma" className="PUMA">
                    {pumaList.map((item, index) => (
                        <div key={index}>
                            <ShoeCard sneaker={item}></ShoeCard>
                        </div>
                    ))}
                    <div className="drop"></div>
                </footer>
            </body>
            <footer className="WISHLIST">
                <div id="wishlist" className="header">
                    Wish List
                </div>
                <WishListSort
                    sneakers={currList}
                    onSortChange={handleSortChange}
                />
                <WishList sneakers={sortedWishList} />
            </footer>
        </div>
    );
}

export default App;
