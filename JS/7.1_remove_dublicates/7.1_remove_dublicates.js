const noDuplicates = (arr) =>
    arr.filter((el, index) => arr.indexOf(el) === index);

console.log(noDuplicates([3, 4, 4, 3, 6, 3]));
