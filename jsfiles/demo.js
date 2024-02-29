var prompt = require('prompt-sync')();

// var a=prompt("hello")
// console.log(a);

const name = "Harsh";
const age  = 20;

console.log(`My Name is ${name} And My Age is ${age}`);


const gameName = "Khokhar";
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("k"));

const newGameName = gameName.substring(0,4);
console.log(newGameName);

const newString = gameName.slice(2,4);
console.log(newString);


const newValue = "    HAKU     "
console.log(newValue);
console.log(newValue.trim());


const stringChange = "HArsh-Khokhar";
console.log(stringChange.replace("A", "a")); 
console.log(stringChange.includes("-"));

console.log(stringChange.split("- , r"));