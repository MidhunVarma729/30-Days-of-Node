// Module which generates a wild pokemon.

var water = ['Squirtle', 'Wartortle', 'Blastoise', 'Psyduck', 'Golduck', 'Poliwag', 'Poliwhirl', 'Seel', 'Shellder', 'Krabby', 'Kingler'];
var fire = ['Charmander', 'Charmander', 'Charizard', 'Torchic', 'Blaziken', 'Camerupt'];
var electric = ['Raichu', 'Pikachu', 'Zapdos', 'Rotom', 'Mareep', 'Electabuzz'];
var grass = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Chikorita', 'Snivy', 'Bayleef']

var allPokemon = [water, fire, electric, grass];
// console.log(allPokemon)

var wildPokemon = function(){
    let randomType = Math.floor(Math.random()*allPokemon.length);
    let randomPokemon = Math.floor(Math.random()*allPokemon[randomType].length);
    return allPokemon[randomType][randomPokemon];
}

// console.log(wildPokemon());

module.exports = {
    aWildPokemonAppears : wildPokemon,
};