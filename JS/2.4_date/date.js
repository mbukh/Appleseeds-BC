const h1 = document.querySelector("#result");
const date = new Date();

/*
Name of the current day e.g. Sunday
2. Current day of the month e.g. 31
3. Current month e.g January
4. Current Year e.g 2021
Create a function that will return a string in the following format:
`Today is Sunday the 31 of January 2021’
*/
const getFullDate = () => {
    const weekDay = date.toLocaleDateString("en-US", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `Today is ${weekDay} the ${day} of ${month} ${year}`;
};
h1.innerHTML = getFullDate();
