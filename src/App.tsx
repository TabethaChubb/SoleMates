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
import logo from "../src/images/soleMatesLogo.jpg";
import AdidasSneaks from "./AddiSneaks";

function App(): JSX.Element {
    const [currList, setWishList] = useState<Sneaker[]>(AdidasSneaks);

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
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <header>
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
                <footer className="ADIDAS">
                    <div id="adidas"></div>
                    <h1>ADIDAS</h1>
                    <ShoeCard sneaker={AdidasSneaks[0]}></ShoeCard>
                    <div className="drop"></div>
                </footer>
                <footer className="NIKE">
                    <div id="nike"></div>
                    <h1>NIKE</h1>
                </footer>
                <footer className="PUMA">
                    <div id="puma"></div>
                    <h1>PUMA</h1>
                </footer>
            </body>
            <footer className="WISHLIST">
                <WishList sneakers={currList} />
            </footer>
        </div>
    );
}

export default App;
