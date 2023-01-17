const doubleValues = (intArr) => intArr.map((val) => val * 2);
console.log(doubleValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

const onlyEvenValues = (intArr) => {
    const res = [];
    intArr.forEach((el) => {
        if (el % 2 === 0) res.push(el);
    });
    return res;
};
console.log(onlyEvenValues([0, 1, 2, 3]));

const showFirstAndLast = (arr) => {
    // no map no foreach // sorry
    return [arr[0], arr[arr.length - 1]].filter((el) => typeof el === "string");
};
console.log(showFirstAndLast([!!"boolstart", 1, 2, "end"]));

const vowelCount = (str) => {
    obj = {};
    vowels = "aeiouy";
    str.toLowerCase()
        .split("")
        .forEach((char) => {
            if (vowels.includes(char)) obj[char] = (obj[char] || 0) + 1;
        });
    return obj;
};
console.log(vowelCount("the moshe bukhman"));

const capitalize = (str) => {
    return str
        .trim()
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
console.log(
    capitalize(
        `   moshe   is   trying to  code hEre :=>
        for the good and for   the bad.`
    )
);

const shiftLetters = (str) => {
    return str
        .split("")
        .map((char) => String.fromCharCode(char.charCodeAt() + 1))
        .join("");
};
console.log(shiftLetters("AbCXYz"));

const swapCase = (str) => {
    let i = 1;
    return str
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase()
        .split(" ")
        .map((word) =>
            ++i % 2 == 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
        )
        .join(" ");
};
console.log(
    swapCase(
        `    moshe   is   trying to   code hEre :=>
        for the good and for   the bad.`
    )
);
