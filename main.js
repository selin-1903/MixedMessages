import { houses, characters, directObject } from './messages.js';
//const prompt = import('prompt-sync');

function chooseRandom(array) {
    let n = array.length;
    let choice = Math.floor(Math.random() * n);
    return array[choice]
}


//let name = prompt("Hello there! What is your name?");
//console.log(`Hello ${name}!`);
let randomHouse = chooseRandom(houses);
let randomCharacter = chooseRandom(characters);
let randomDirectObject = chooseRandom(directObject);
console.log("\n\nYour Harry Potter character is:");
console.log(`${randomCharacter} ${randomDirectObject}, in house ${randomHouse}!\n\n`);
