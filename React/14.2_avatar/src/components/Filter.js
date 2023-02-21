import { useEffect, useState } from "react";

const Filter = ({ users, setFilteredUsers }) => {
    const [searchText, setSearchText] = useState("");

    // Handle input change and update searchText state
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    // Filter users based on searchText state
    useEffect(() => {
        // Utility function to check if a string includes the searchText (case insensitive)
        const fitsString = (str) =>
            str.toLowerCase().includes(searchText.toLowerCase());

        // Set a timeout to prevent excessive re-rendering
        const timeout = setTimeout(() => {
            // Filter the users array based on the fitsString utility function
            setFilteredUsers(
                users.filter(
                    (user) =>
                        fitsString(user.name.title) ||
                        fitsString(user.name.first) ||
                        fitsString(user.name.last)
                )
            );
        }, 500);
        // Debouncing
        // Clear timeout if searchText changes before the timeout has completed
        return () => clearTimeout(timeout);
    }, [searchText, setFilteredUsers, users]);

    // Render input with onChange handler
    return (
        <div className="filter">
            <input
                autoFocus
                type="text"
                placeholder="Search user (ex. Eva)"
                value={searchText}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Filter;
