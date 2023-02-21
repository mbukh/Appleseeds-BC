import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";
import fetchData from "./services/fetchData";

const App = () => {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);

    // Fetch users data on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await fetchData(50);
            setUsers(usersData);
        };
        fetchUsers();
    }, []);

    // Render filter and user list components based on filteredUsers state
    return (
        <div className="app">
            <Filter users={users} setFilteredUsers={setFilteredUsers} />

            {filteredUsers.length > 0 ? (
                <UserList users={filteredUsers} />
            ) : (
                <div>No users fount with this criteria.</div>
            )}
        </div>
    );
};

export default App;
