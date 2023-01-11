const myCountry = {
    country: "Ukraine",
    capital: "Kyiv",
    language: "Ukrainian",
    population: "42m",
    neighbours: [
        "Poland",
        "Hungary",
        "Romania",
        "Moldova",
        "Russian Terrorist State",
        "Belorussian Totalitarian State",
    ],
    describe: () =>
        console.log(
            `${myCountry.country} has ${myCountry.population} people, 
            their mother tongue is ${myCountry.language}, 
            they have ${myCountry.neighbours.length} neighbouring countries 
            and a capital called ${myCountry.capital}.`
                .split(/\n/)
                .map((str) => str.trim())
                .join(" ")
        ),
    checkIsland: () =>
        (myCountry.isIsland = myCountry.neighbours.length === 0 ? "Yes" : "No"),
};
myCountry.describe();
myCountry.checkIsland();
console.log("Is an island? " + myCountry.isIsland);
