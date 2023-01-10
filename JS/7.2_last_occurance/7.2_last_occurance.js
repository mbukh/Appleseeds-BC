let lastYouPos;
const string = "The more you know, the more you know that you don't know";

// no indexOf()
lastYouPos = string.toLowerCase().lastIndexOf("you");
console.log(lastYouPos);

// no indexOf()
lastYouPos = [...string.matchAll(/you/gi)].pop().index;
console.log(lastYouPos);

// indexOf()
const newString = string.toLowerCase().split("").reverse().join("");
lastYouPos = newString.indexOf("uoy");
console.log(string.length - lastYouPos - "you".length);
