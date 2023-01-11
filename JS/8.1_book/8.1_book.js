const book = {
    name: "Singularity Sky",
    author: "Charles Stross",
    ISBN: "0-441-01072-5",
    pages: 400,
    year: 2003,
    keywords: ["sci-fi", "science fiction", "best novel 2004"],
};

const getBookDescr = ({ name, author, year }) =>
    console.log(
        `The book "${name}" was written by ${author} in the year of ${year}.`
    );

getBookDescr(book);
