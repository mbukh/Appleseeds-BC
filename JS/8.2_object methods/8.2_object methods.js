const myCountry = {
    country: "Ukraine",
    capital: "Kyiv",
    language: "Ukrainian",
    population: "42M",
    neighbours: [
        "Poland",
        "Hungary",
        "Romania",
        "Moldova",
        "Russian Terrorist State",
        "Belorussian Totalitarian State",
    ],
    describe() {
        console.log(
            `${this.country} has ${this.population} people, 
            their mother tongue is ${this.language}, 
            they have ${this.neighbours.length} neighbouring countries 
            and a capital called ${this.capital}.`
                .split(/\n/)
                .map((str) => str.trim())
                .join(" ")
        );
    },
    checkIsland() {
        this.isIsland = this.neighbours.length === 0 ? "Yes" : "No";
    },
};
myCountry.describe();
myCountry.checkIsland();
console.log("Is an island? " + myCountry.isIsland);
