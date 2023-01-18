function findSmallest(a, b, c) {
    if (a > c && b > c) {
        return c;
    } else if (a > b && c > b) {
        return b;
    } else {
        return a;
    }
}
findSmallest(52, 66, 2);

// findSmalest is not defined : line 10
// mismatch names

// create breakpoints
// check what if branch is activated and fix it
// a>b>c is not correct b>c true/false, a>true(1)/false(0)
// need to compare both pairs using && operator
