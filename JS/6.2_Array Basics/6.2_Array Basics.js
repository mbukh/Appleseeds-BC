{
    const people = ["Greg", "Mary", "Devon", "James"];
    people.forEach((el) => console.log(el));

    people.pop();
    people.shift();
    people.unshift("Matt");
    people.push("Moses");

    console.log(" - ");

    for (let i = 0; i <= people.indexOf("Mary"); i++) {
        console.log(people[i]);
    }

    console.log(" - ");

    const newArr = people.slice(2);
    console.log(people);
    console.log(newArr);

    console.log(" - ");

    people.indexOf("Mary");
    people.indexOf("Foo") === -1;
}

console.log(" - ");

{
    const people = ["Greg", "Mary", "Devon", "James"];
    people.splice(2, 1, "Elizabeth", "Artie");
    console.log(people);

    withBob = [...people, "Bob"];
    console.log(withBob);
}
