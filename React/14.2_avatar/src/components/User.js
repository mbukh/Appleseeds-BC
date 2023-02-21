import React from "react";

const User = ({ user }) => {
    return (
        // Render the user card
        <div className="user">
            <div className="image-wrapper">
                <img src={user.picture.large} alt="user" />
            </div>
            <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
        </div>
    );
};

export default User;
