stepsInConsole = (n) => {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) line += "#";
        for (let k = i + 1; k <= n; k++) line += "_";
        console.log(line);
    }
};

stepsInConsole(18);
