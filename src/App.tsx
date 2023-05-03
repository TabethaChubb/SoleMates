/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import nikeAirMax from "../src/images/anthony-a-JldH_vLwdYs-unsplash.jpg";
import adidas from "../src/images/1.png";
import nike from "../src/images/2.png";
import puma from "../src/images/3.png";
import { Sneaker, role } from "./interfaces/sneaker";
import { WishList } from "./userWishList";
import logo from "../src/images/soleMatesLogo.jpg";
import { AdiList } from "./nike";

function App(): JSX.Element {
    const [currList, setWishList] = useState<Sneaker[]>([
        {
            model: "Air Max",
            brand: "Nike",
            size: [1, 7, 9, 10],
            price: 120,
            image: nikeAirMax,
            outOfStock: false,
            colors: ["orange", "black"]
        }
    ]);

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

    const [role, setRole] = useState<role>();

    return (
        <div className="App">
            <head>
                <title>Navpage mockup</title>
            </head>

            <body>
                <nav>
                    <div className="dropdown">
                        <button className="dropbtn">Select User: {role}</button>
                        <div className="dropdown-content">
                            <p>
                                <button onClick={() => setRole("Customer")}>
                                    Customer
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setRole("Employee")}>
                                    Employee
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setRole("Owner")}>
                                    Owner
                                </button>
                            </p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="">Bucket?</a>
                        </li>
                        <li>
                            <a href="">Bucket?</a>
                        </li>
                    </ul>
                </nav>
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
                    <div id="adidas">
                        <h1>ADIDAS</h1>
                    </div>
                    <div className="drop"></div>
                </footer>
                <footer className="NIKE">
                    <div id="nike">
                        <AdiList></AdiList>
                    </div>
                    <h1>NIKE</h1>
                    <a href="Air Force 1">Air force 1</a>
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
