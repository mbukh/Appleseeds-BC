import axios from "axios";

// create an instance of axios with baseURL of the mock API
const api = axios.create({
    baseURL: "https://63f694f29daf59d1ad8b6b07.mockapi.io/crud/api/",
});

// define methods for getting, updating, creating, and deleting users
const getUsers = async () => {
    const response = await api.get("/users");
    return response.data;
};

const updateUser = async (userId, data) => {
    const response = await api.put(`/users/${userId}`, data);
    return response.data;
};

const createUser = async (data) => {
    const response = await api.post("/users", data);
    return response.data;
};

const deleteUser = async (userId) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
};

// define method for logging in a user with email and password
const loginUser = async (email, password) => {
    const response = await api.get("/users", {
        params: {
            email: email,
            password: password,
        },
    });
    return response.data[0]; // assumes email is unique and only one user is returned
};
export const API = { getUsers, updateUser, createUser, deleteUser, loginUser };
