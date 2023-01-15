const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

let i = 0;
while (i < listOfNeighbours.length) {
    let j = 0;
    while (j < listOfNeighbours[i].length) {
        console.info(`Neighbour: ${listOfNeighbours[i][j]}`);
        j++;
    }
    i++;
}
