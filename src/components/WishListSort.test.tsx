/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WishListSort } from "./WishListSort";

test("renders dropdown menu with initial 'None' value", () => {
    render(<WishListSort onSortChange={() => {}} sneakers={[]} />);
    const dropdown = screen.getByLabelText("Sort by:");
    expect(dropdown).toHaveValue("None");
});
