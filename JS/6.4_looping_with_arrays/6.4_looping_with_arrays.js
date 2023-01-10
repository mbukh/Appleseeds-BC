const populations = [0.00348, 0.001626, 0.001357, 0.000801];

const percentageOfWorld2 = (population) =>
    ((population / 7900) * 100).toFixed(8) + "%";

const populationPercentages = (population) => {
    const percentages = [];
    population.forEach((element) =>
        percentages.push(percentageOfWorld2(element))
    );
    return percentages;
};

// Smallest countries of the world
console.log(populationPercentages(populations));
