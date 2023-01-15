const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (const el of listOfNeighbours) {
    for (const country of el) {
        console.info(`Neighbour: ${country}`);
    }
}
