Array.prototype.Filter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++)
        if (callback(this[i], i, this)) result.push(this[i]);
    return result;
};

let tstArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(tstArr1.Filter((el) => el < 5)); // [1,2,3,4]
console.log(tstArr1.Filter((el, idx, arr) => idx > 3)); // [1,2,3,4]

Array.prototype.Find = function (callback) {
    for (let i = 0; i < this.length; i++)
        if (callback(this[i], i, this)) return this[i];
    return undefined;
};

let tstArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(tstArr2.Find((el) => el === 5)); // [5]
console.log(tstArr2.Find((el, idx, arr) => idx < 2)); // [1]
console.log(tstArr2.Find((el, idx, arr) => el === "0")); // undefined

Array.prototype.Reduce = function (callback, initialValue = null) {
    let accumulator = initialValue === null ? this[0] : initialValue;
    let i = initialValue === null ? 1 : 0;
    for (; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};
console.log(
    [
        [0, 1],
        [2, 3],
        [4, 5],
    ].Reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
    )
); // [ 0, 1, 2, 3, 4, 5 ]
console.log(
    [{ x: 1 }, { x: 2 }, { x: 3 }].Reduce(
        (accumulator, currentValue) => accumulator + currentValue.x,
        0
    )
); // 6
