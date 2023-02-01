function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const pok1 = new Pokemon("Pikachu", "dead type", [
    () => "kick",
    () => "low kick",
    () => "high kick",
]);
const pok2 = new Pokemon("Squirtle", "normal type", [
    () => "in da face",
    () => "in da heart",
    () => "in da ding-dong",
]);
const pok3 = new Pokemon("Shitpants", "live type", [
    () => "power ball",
    () => "fire ball",
    () => "sweat ball",
]);

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you ${this.name}`);
};
Pokemon.prototype.attack = function (attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]()}`);
};

pok1.callPokemon();
pok1.attack(0);
pok2.callPokemon();
pok2.attack(1);
pok3.callPokemon();
pok3.attack(2);
