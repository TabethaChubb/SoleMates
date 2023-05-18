import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserListChange from "./RoleAddDelete";

test("should add a user to the roles list", () => {
    const defaultRoles = ["Admin", "User"];
    const onRoleChange = jest.fn();

    const { getByText, getByPlaceholderText } = render(
        <UserListChange
            defaultRoles={defaultRoles}
            onRoleChange={onRoleChange}
        />
    );

    const userInput = getByPlaceholderText("Enter username");
    const addUserButton = getByText("Add User");

    fireEvent.change(userInput, { target: { value: "NewUser" } });
    fireEvent.click(addUserButton);

    expect(onRoleChange).toHaveBeenCalledWith(["Admin", "User", "NewUser"]);
});

test("should delete a user from the roles list", () => {
    const defaultRoles = ["Admin", "User"];
    const onRoleChange = jest.fn();

    const { getByText, getByPlaceholderText } = render(
        <UserListChange
            defaultRoles={defaultRoles}
            onRoleChange={onRoleChange}
        />
    );

    const userInput = getByPlaceholderText("Enter username");
    const deleteUserButton = getByText("Delete User");

    fireEvent.change(userInput, { target: { value: "Admin" } });
    fireEvent.click(deleteUserButton);

    expect(onRoleChange).toHaveBeenCalledWith(["User"]);
});

test("should clear input field after adding a user", () => {
    const defaultRoles = ["Admin", "User"];
    const onRoleChange = jest.fn();

    const { getByText, getByPlaceholderText } = render(
        <UserListChange
            defaultRoles={defaultRoles}
            onRoleChange={onRoleChange}
        />
    );

    const userInput = getByPlaceholderText("Enter username");
    const addUserButton = getByText("Add User");

    fireEvent.change(userInput, { target: { value: "NewUser" } });
    fireEvent.click(addUserButton);

    expect((userInput as HTMLInputElement).value).toBe("");
});
