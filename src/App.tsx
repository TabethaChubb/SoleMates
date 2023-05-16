/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import adidas from "../src/images/1.png";
import nike from "../src/images/2.png";
import puma from "../src/images/3.png";
import { Sneaker, SneakerBrand } from "./interfaces/sneaker";
import { WishList } from "./components/userWishList";
import { ShoeCard } from "./components/Shoe_Card";
import MainInventory from "./CentralList";
import { WishListSort } from "./components/WishListSort";
import logo from "../src/images/soleMatesLogo.jpg";
import UserListChange from "./components/RoleAddDelete";
import { Button, Form } from "react-bootstrap";
import { ShoeForm, NewShoe } from "./components/AddShoe";

function App(): JSX.Element {
    const [role, setRole] = useState<string>("Customer");
    const [currList, setWishList] = useState<Sneaker[]>([]);
    const [editList, setEditList] = useState<boolean>(true);
    const [available, setAvailable] = useState<boolean>(true);

    //Updating list of Users
    const [roles, setUserList] = useState<string[]>([
        "Customer",
        "Employee",
        "Owner"
    ]);
    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
        setRole(event.target.value);
    const handleUserListChange = (roles: string[]) => {
        setUserList(roles);
    };

    //Making sneaker lists into states
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
            return 0; // no sorting
        }
    });
    //Checks if you can put shoe in edit list (max 1) adds if able
    const handleEditDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedSneaker = JSON.parse(
            event.dataTransfer.getData("application/json")
        ) as Sneaker;
        currList.length < 1 ? setEditList(true) : setEditList(false);
        editList ? setWishList([droppedSneaker]) : setWishList([...currList]);
    };
    //deletes shoes off the main list
    const deleteOffMainListevent = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedSneaker = JSON.parse(
            event.dataTransfer.getData("application/json")
        ) as Sneaker;
        setCentralList(
            currCentralList.filter(
                (shoe: Sneaker): boolean => shoe.model !== droppedSneaker.model
            )
        );
    };

    //sets shoes current changes
    function updateAvailability(event: React.ChangeEvent<HTMLInputElement>) {
        setAvailable(event.target.checked);
        currList[0].outOfStock = available;
        setCentralList(
            currCentralList.map(
                (shoe: Sneaker): Sneaker =>
                    shoe.model == currList[0].model
                        ? { ...shoe, outOfStock: !shoe.outOfStock }
                        : { ...shoe }
            )
        );
    }
    //reset list
    function emptyList() {
        setWishList([]);
    }

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

    //Adds a new sneaker to inventory list
    const [showForm, setShowForm] = useState(false); // State to control the form visibility

    const handleAddShoe = (newShoe: NewShoe) => {
        const { model, brand, price, colors, sizes } = newShoe;

        const sneaker: Sneaker = {
            model,
            brand: brand as SneakerBrand,
            price: parseInt(price),
            colors: colors.split(",").map((color) => color.trim()),
            size: sizes.split(",").map((size) => Number(size.trim())),
            selectedColor: "",
            selectedSize: NaN,
            outOfStock: false,
            image: ""
        };

        setCentralList([...currCentralList, sneaker]);
        setShowForm(false);
    };
    const handleCancel = () => {
        setShowForm(false);
    };
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
                            <select value={role} onChange={handleRoleChange}>
                                {roles.map((roleOption, index) => (
                                    <option key={index} value={roleOption}>
                                        {roleOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {role === "Owner" && (
                        <UserListChange
                            defaultRoles={roles}
                            onRoleChange={handleUserListChange}
                        ></UserListChange>
                    )}
                    <div className="spacer"></div>
                    {role === "Owner" && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="inventory-add-button"
                        >
                            Add New Shoe <br /> to Inventory
                        </button>
                    )}
                    <div>
                        <a href="#wishlist">Go to Wish List</a>
                    </div>
                    <div>
                        <a href="#homepage">Go to Home Page</a>
                    </div>
                    <div>
                        {(role === "Employee" || role === "Owner") && (
                            <div
                                className="editZone"
                                onDrop={handleEditDrop}
                                onDragOver={handleDragOver}
                            >
                                EDIT
                            </div>
                        )}
                    </div>
                    <div>
                        {role === "Owner" && (
                            <div
                                className="deleteZone"
                                onDrop={deleteOffMainListevent}
                                onDragOver={handleDragOver}
                            >
                                Delete
                            </div>
                        )}
                    </div>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </nav>
                {role === "Customer" && (
                    <nav className="secondary">
                        <ul>
                            <li>
                                <div
                                    className="wishlistAddDrop-Zone"
                                    onDrop={handleAddDrop}
                                    onDragOver={handleDragOver}
                                >
                                    ⭐ 🛒
                                </div>
                            </li>
                            <li>
                                <div
                                    className="wishlistDeleteDrop-Zone"
                                    onDrop={handleDeleteDrop}
                                    onDragOver={handleDragOver}
                                >
                                    ❌ 🗑️
                                </div>
                            </li>
                        </ul>
                    </nav>
                )}
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
                {showForm && (
                    <div className="overlay">
                        <div className="add-shoe-form">
                            {showForm && (
                                <ShoeForm
                                    onAddShoe={handleAddShoe}
                                    onCancel={handleCancel}
                                />
                            )}
                        </div>
                    </div>
                )}
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
                <div>
                    {(role === "Owner" || role === "Employee") && (
                        <Form.Check
                            type="switch"
                            id="is-available"
                            label="In stock"
                            checked={available}
                            onChange={updateAvailability}
                        />
                    )}
                </div>
                <div>
                    {(role === "Owner" || role === "Employee") && (
                        <Button onClick={emptyList}>Finish</Button>
                    )}
                </div>
            </footer>
        </div>
    );
}

export default App;
