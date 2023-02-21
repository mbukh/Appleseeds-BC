import axios from "axios";

// Fetch users data from the randomuser.me API
const fetchData = async (number) => {
    try {
        // Make a GET request to the API with the number of users specified
        const response = await axios(
            `https://randomuser.me/api/?results=${number}`
        );
        // Extract the user data from the response object
        const usersData = response.data.results;
        return usersData;
    } catch (error) {
        // Log any errors to the console
        console.error(error);
    }
};

export default fetchData;
