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

test("should clear input field after deleting a user", () => {
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

    expect((userInput as HTMLInputElement).value).toBe("");
});

test("should update the input field value when the user enters a new value", () => {
    const defaultRoles = ["Admin", "User"];
    const onRoleChange = jest.fn();

    const { getByPlaceholderText } = render(
        <UserListChange
            defaultRoles={defaultRoles}
            onRoleChange={onRoleChange}
        />
    );

    const userInput = getByPlaceholderText("Enter username");

    fireEvent.change(userInput, { target: { value: "NewUser" } });

    expect((userInput as HTMLInputElement).value).toBe("NewUser");
});
