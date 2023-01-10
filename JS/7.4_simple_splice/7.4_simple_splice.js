const fruits = ["Banana", "Orange", "Apple", "Mango"];

// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
