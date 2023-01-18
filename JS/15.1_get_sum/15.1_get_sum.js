function getSum(arr1, arr2) {
    const sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3], [5, 66, 23]);

// line 2 - >  arr1 undefined
// parameters not separated by comma
// line 3 - assignment to const -> line 2 change to let
// method:
// turn on node.js breakpoint on caught exceptions
