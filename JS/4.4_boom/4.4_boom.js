const countToNum = (n) => {
    let result = "";
    for (let i = 1; i <= n; i++)
        i % 7 === 0
            ? (i + "").includes("7")
                ? (result += "BOOM-BOOM ")
                : (result += "BOOM ")
            : (result += i + " ");
    return result;
};

console.log(countToNum(54));
