function getSumOfEven(arr) {
    // arr[2]; //=
    // arr[4]; //=
    // arr[6]; //=
    // arr[8]; //=
    // arr[10]; //=
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //=

// use a breakpoint on line 2
// check values of each element in return
// arr[10] undefined (0) => we try to return NaN
// start from arr[1] (the second element) and go up
