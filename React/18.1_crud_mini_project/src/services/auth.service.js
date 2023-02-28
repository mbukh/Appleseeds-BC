import { API } from "./mockapi";

const nullUser = { id: null, name: null, email: null };

const findUserByData = async ({ email = null, password = null }) => {
    return await API.loginUser(email, password);
};

const auth = async (userData) => {
    const userFromDB = await findUserByData(userData);
    if (userFromDB) {
        localStorage.setItem(
            "user",
            JSON.stringify({
                id: userFromDB.uuid,
                name: userFromDB.name,
                email: userFromDB.email,
                type: userFromDB.type,
            })
        );
        return userFromDB;
    }
    return nullUser;
};

const register = async (userData) => {
    // get user by mail
    // if not exists:
    const newUser = API.createUser(userData);
    // localStorage: newUser.token, newUser.name, newUser.image
};

const logOut = () => {
    localStorage.removeItem("user");
    return nullUser;
};

const currentUser = () =>
    localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : nullUser;

const exportObject = { auth, register, logOut, currentUser };

export default exportObject;
