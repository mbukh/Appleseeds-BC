const number = [1, 100, 2, 2, 33, 3, 44, 4, 1];

const max = number.reduce((acc, cur) => Math.max(acc, cur), 0);
console.log(max);

const maxEven = number.reduce((acc, cur) => acc + (cur % 2 ? 0 : cur), 0);
console.log(maxEven);

const average = number.reduce((acc, cur) => acc + cur, 0) / number.length;
console.log(average);
