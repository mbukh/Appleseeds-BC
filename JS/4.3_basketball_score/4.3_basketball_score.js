const teams = [
    { name: "John's", score: [89, 120, 103, 132] },
    { name: "Mike's", score: [116, 94, 123] },
    { name: "Mary's", score: [97, 134, 105, 5] },
];

const averageScore = (team) =>
    team.score.reduce((a, b) => a + b, 0) / team.score.length;

for (const team of teams) {
    team.average = averageScore(team);
    console.log(`${team.name}'s team average score: ${team.average}`);
}

teams.sort((t1, t2) => t2.average - t1.average);

if (teams[0].average == teams[1].average) {
    console.log("It's a draw.");
} else {
    console.log(`The winner is: ${teams[0].name}`);
}
