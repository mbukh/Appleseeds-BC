const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

const getCanReadBooks = (bookArr) =>
    bookArr
        .filter((book) => book.readingStatus === true)
        .forEach((book) => {
            console.log(
                `book name: ${book.author} | author name: ${book.title} | reading status: ${book.readingStatus}`
            );
        });
getCanReadBooks(library);
