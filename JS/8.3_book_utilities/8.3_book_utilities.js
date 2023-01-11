const book1 = {
    name: "Singularity Sky",
    author: "Charles Stross",
    year: 2003,
};
const book2 = {
    name: "Singularity Sky 2",
    author: "Charles Stross",
    year: 2005,
};

const bookUtils = {
    getFirstPublished: (book1, book2) => {
        Number.parseInt(book1.year) < Number.parseInt(book2.year)
            ? book1
            : book2;
    },
    setNewEdition: (book, latestEdition) => {
        book.latestEdition = latestEdition;
    },
    setLanguage: (book, language) => {
        book.language = language;
    },
    setTranslation: (book, language, translator) => {
        book.translation = { language, translator };
    },
    setPublisher: (book, name, location) => {
        book.publisher = { name, location };
    },
    isSamePublisher: (book1, book2) => {
        return (
            book1.publisher.name === book2.publisher.name &&
            book1.publisher.location === book2.publisher.location
        );
    },
};
bookUtils.setPublisher(book1, "Moshe", "Jerusalem");
bookUtils.setPublisher(book2, "Moshe2", "Jerusalem");

console.log(bookUtils.isSamePublisher(book1, book2));
