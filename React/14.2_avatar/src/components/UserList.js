import User from "./User";

const UserList = ({ users }) => {
    return (
        // Render the list of users
        <div className="user-list">
            {users.map((user) => (
                // Render each user in the list
                <User key={user.login.uuid} user={user} />
            ))}
        </div>
    );
};

export default UserList;
