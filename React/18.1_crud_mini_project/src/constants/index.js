import { pages } from "../pages";

// Convert all pages' name to lowercase text
export const pageNames = Object.keys(pages).reduce(
    (obj, name) => ({
        ...obj,
        [name.toLocaleLowerCase()]: name.toLocaleLowerCase(),
    }),
    {}
);
