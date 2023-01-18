function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]; //=
    }
    return sum;
}
calcAverage([85, 90, 92]); //=

// the function returns NaN . why?
// start from line 2. what is sum? undefined (NaN when you add to it)
// give it a starting number value (0)
// solved? yes
