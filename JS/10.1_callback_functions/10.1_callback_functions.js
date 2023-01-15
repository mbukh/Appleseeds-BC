const logIt = (s) => console.log(s);

const isString = (s1, func) => {
    if (typeof s1 === "string") func(s1);
};
isString("asd", logIt);
isString(12345, logIt);
console.log(" ");

const dashIt = (s) => console.log(s.replace(/\s+/g, "-"));

firstWordUpperCase = (s1, func) => {
    index = s1.search(/\b[a-z]/i);
    func(
        s1.slice(0, index) +
            s1.charAt(index).toUpperCase() +
            s1.slice(index + 1)
    );
};
firstWordUpperCase("12  3a   this is awesome", dashIt);
setTimeout(firstWordUpperCase.bind(null, "what?", logIt), 1000);
