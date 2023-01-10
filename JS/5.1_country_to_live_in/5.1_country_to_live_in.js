function countryToLiveIn(language, isIsland, population, country) {
    isGoodToLive =
        language.toLowerCase() === "english" &&
        population < 50 &&
        isIsland === false;
    if (isGoodToLive) console.log(`You should live in ${country}`);
    else console.log(`${country} does not meet your criteria`);
}

countryToLiveIn("finnish", false, 5.54, "Finland");
countryToLiveIn("italian", true, 59.11, "Italy");
countryToLiveIn("english", true, 67.3, "The UK");
countryToLiveIn("english", true, 2.272, "Jamaica");
countryToLiveIn("english", false, 0.032669, "Gibraltar");
