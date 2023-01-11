const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const flattenedArray = (arr) =>
    arr
        .join()
        .replace(/[\s,.\"\']/g, "")
        .toLowerCase()
        .split("");

const arrayToObject = (arr) =>
    arr.reduce((accObj, curr) => {
        return accObj[curr] ? ++accObj[curr] : (accObj[curr] = 1), accObj;
    }, {});

const flatArray = flattenedArray(array);
console.log(flatArray);

const resultObject = arrayToObject(flatArray);
console.log(resultObject);
