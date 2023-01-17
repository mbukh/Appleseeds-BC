const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2,
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4,
        },
    ],
    cashRegister: 200,
};

const getCandy = (candyStore, id) => {
    return candyStore.candies.find((candy) => candy.id === id);
};

const getPrice = (candyStore, id) => {
    return candyStore.candies.find((candy) => candy.id === id).price;
};

const addCandy = (candyStore, id, name, price) => {
    const candy = getCandy(candyStore, id);
    if (!candy) {
        candyStore.candies.push({
            id,
            name,
            price,
            amount: 1,
        });
        return "Candy created and added";
    } else {
        candy.amount += 1;
        return `Amount of id ${candy.id} updated to ${candy.amount}`;
    }
};

const buyCandy = (candyStore, id) => {
    const candy = getCandy(candyStore, id);
    if (candy && candy.amount > 0) {
        candy.amount -= 1;
        candyStore.cashRegister += candy.price;
        return `Candy with id ${id} bought. ${candy.amount} left`;
    }
    return `No candies with id ${id} left`;
};

console.log(getCandy(candyStore, "5hd7y"));
console.log("price: " + getPrice(candyStore, "5hd7y"));
console.log(addCandy(candyStore, "mbukhman4", "vanil-pep", 99));
console.log(addCandy(candyStore, "mbukhman4", "vanil-pep", 99));
console.log(addCandy(candyStore, "mbukhman4", "vanil-pep", 99));
console.log(buyCandy(candyStore, "mbukhman6"));
console.log(buyCandy(candyStore, "mbukhman4"));
console.log(buyCandy(candyStore, "mbukhman4"));
console.log(buyCandy(candyStore, "mbukhman4"));
console.log(buyCandy(candyStore, "mbukhman4"));
console.log(buyCandy(candyStore, "mbukhman4"));
console.log(buyCandy(candyStore, "mbukhman4"));
console.log(candyStore);
