const data = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zip: 10001,
        },
        hobbies: ["reading", "running", "gaming"],
        friends: [
            {
                id: 2,
                name: "Jane Smith",
                age: 25,
            },
            {
                id: 3,
                name: "Bob Johnson",
                age: 35,
            },
        ],
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        address: {
            street: "456 Park Ave",
            city: "Los Angeles",
            state: "CA",
            zip: 90001,
        },
        hobbies: ["hiking", "cooking", "traveling"],
        friends: [
            {
                id: 1,
                name: "John Doe",
                age: 30,
            },
            {
                id: 4,
                name: "Samantha Brown",
                age: 28,
            },
        ],
    },
    {
        id: 3,
        name: "Bob Johnson",
        age: 35,
        address: {
            street: "789 Elm St",
            city: "Chicago",
            state: "IL",
            zip: 60001,
        },
        hobbies: ["fishing", "golfing", "watching TV"],
        friends: [
            {
                id: 1,
                name: "John Doe",
                age: 30,
            },
            {
                id: 5,
                name: "Emily Davis",
                age: 32,
            },
        ],
    },
];

// FILTER
let res;

// Exercise 1: Use the filter method to get all the friends of John Doe

res = data.filter(
    (person) =>
        person.friends.filter((friend) => friend.name === "John Doe").length > 0
    // i could use some() but i didn't want to as we will use it it the next tasks
);
// console.log(res);

// Exercise 2: Use the filter method to get all the people who live in New York

res = data.filter((person) => person.address.city === "New York");
// console.log(res);

// Exercise 3: Use the filter method to get all the people who are older than 30
res = data.filter((person) => person.age >= 30);
// console.log(res);

// MAP

// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
res = data
    .find((person) => person.name === "John Doe")
    .friends.map((friend) => friend.name);
// .flat();
console.log(res);
res = data
    .filter((person) => person.name === "John Doe")[0]
    .friends.map((friend) => friend.name);
console.log(res);
res = data
    .filter((person) => person.name === "John Doe")
    .map((person) => person.friends)
    .flat()
    .map((friend) => friend.name);
console.log(res);

// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
// res =
// console.log(res);

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
// res =
// console.log(res);

// FIND

// Exercise 1: Use the find method to find the first person who lives in Chicago
// res =
// console.log(res);

// Exercise 2: Use the find method to find the first person who is older than 30
// res =
// console.log(res);

// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
// res =
// console.log(res);

// FOREACH

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
// res =
// console.log(res);

// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
// res =
// console.log(res);

// Exercise 3: Use the forEach method to print out the names of all the friends of each person
// res =
// console.log(res);

// SOME

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
// res =
// console.log(res);

// Exercise 2: Use the some method to check if any of the people in the data array live in California
// res =
// console.log(res);

// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
// res =
// console.log(res);

// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
// res =
// console.log(res);

// Exercise 2: Use the every method to check if all the people in the data array live in the same state
// res =
// console.log(res);

// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25
// res =
// console.log(res);

// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array
// res =
// console.log(res);

// Exercise 2: Use the reduce method to get the number of people who live in each state
// res =
// console.log(res);

// Exercise 3: Use the reduce method to get the average age of all the people in the data array
// res =
// console.log(res);

// INCLUDES

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"
// res =
// console.log(res);

// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4
// res =
// console.log(res);

// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
// res =
// console.log(res);
