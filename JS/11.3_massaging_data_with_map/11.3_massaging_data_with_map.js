const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

const getAllNames = (data) => {
    return data.map((item) => item.name);
};
console.log(getAllNames(data));

const getYounger1990 = (data) => {
    return data.filter((item) => +item.birthday.split("-")[2] < "1990");
};
console.log(getYounger1990(data));

const differentMeals = (inputArray) => {
    return inputArray.reduce((obj, current) => {
        Object.keys(current.favoriteFoods).forEach((foodType) => {
            current.favoriteFoods[foodType].forEach((food) => {
                obj[food] = (obj[food] || 0) + 1;
            });
        });
        return obj;
    }, {});
};
console.log(differentMeals(data));

