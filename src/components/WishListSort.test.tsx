/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WishListSort } from "./WishListSort";

test("renders dropdown menu with initial 'None' value", () => {
    render(<WishListSort onSortChange={() => {}} sneakers={[]} />);
    const dropdown = screen.getByLabelText("Sort by:");
    expect(dropdown).toHaveValue("None");
});

test("updates sort option and triggers callback on selection", () => {
    const mockOnSortChange = jest.fn();
    render(<WishListSort onSortChange={mockOnSortChange} sneakers={[]} />);
    const dropdown = screen.getByLabelText("Sort by:");
    fireEvent.change(dropdown, { target: { value: "Brand" } });
    expect(dropdown).toHaveValue("Brand");
    expect(mockOnSortChange).toHaveBeenCalledWith("Brand");
});

test("renders correct number of sorting options", () => {
    render(<WishListSort onSortChange={() => {}} sneakers={[]} />);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(6); // Including the "None" option
});
