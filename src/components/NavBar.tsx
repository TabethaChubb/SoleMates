/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/soleMatesLogo.jpg";

export function NavBar(): JSX.Element {
    type role = "Customer" | "Employee" | "Owner";
    const [role, setRole] = useState<role>();

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
        setRole(event.target.value as role);
    return (
        <div className="App">
            <nav>
                <div className="dropdown">
                    <button className="dropbtn">Select User: {role}</button>
                    <div className="dropdown-content">
                        <select value={role} onChange={handleRoleChange}>
                            <option value="Customer">Customer</option>
                            <option value="Employee">Employee</option>
                            <option value="Owner">Owner</option>
                        </select>
                    </div>
                </div>
                <div>
                    <a href="#wishlist">Go to Wish List</a>
                </div>
                <div>
                    <a href="#homepage">Go to Home Page</a>
                </div>
                <div>
                    {(role === "Employee" || role === "Owner") && (
                        <button id="editButton">Edit Shoe</button>
                    )}
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            </nav>
        </div>
    );
}
