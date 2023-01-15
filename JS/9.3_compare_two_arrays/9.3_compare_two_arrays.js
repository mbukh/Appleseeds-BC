const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareArrays = (arr1, arr2) => {
    let similarArr = [];
    for (c of food) {
        for (d of food1) {
            if (c === d) {
                similarArr.push(c);
            }
        }
    }
    return !similarArr.length ? false : similarArr;
};

let res = compareArrays(food1, food);
console.log(res);
