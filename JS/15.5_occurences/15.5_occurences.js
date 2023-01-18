function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter; //=
}
countOccurrences("ini mini miny moe", "n");

// follow counter, i and str.starAt(i) values
// counter doesn't change. why?
// fix line 5. works? fuck yeah.
