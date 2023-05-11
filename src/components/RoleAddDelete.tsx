import React, { useState } from "react";

interface UserListProps {
    defaultRoles: string[];
    onRoleChange: (roles: string[]) => void;
}

export function UserListChange({
    defaultRoles,
    onRoleChange
}: UserListProps): JSX.Element {
    const [userInput, setUserInput] = useState<string>("");

    const handleUserListChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserInput(event.target.value);
    };

    const addRole = (newRole: string) => {
        onRoleChange([...defaultRoles, newRole]);
    };

    const deleteRole = (roleToDelete: string) => {
        onRoleChange(defaultRoles.filter((role) => role !== roleToDelete));
    };

    const handleAddUser = () => {
        addRole(userInput);
        console.log("Adding user: ", userInput);
        setUserInput("");
    };

    const handleDeleteUser = () => {
        deleteRole(userInput);
        console.log("Deleting user: ", userInput);
        setUserInput("");
    };

    return (
        <div>
            <button onClick={handleAddUser}>Add User</button>
            <button onClick={handleDeleteUser}>Delete User</button>
            <input
                type="text"
                value={userInput}
                onChange={handleUserListChange}
                placeholder="Enter username"
            />
        </div>
    );
}

export default UserListChange;
