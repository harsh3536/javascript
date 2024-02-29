var prompt = require('prompt-sync')();
function game(){
let a = Math.random()*100
let b = Math.round(a)
console.log(b);

let z = prompt("Guess the Number :");
z = Number.parseInt(z)

while(b !== z){
    console.log("try again");
}
if(b==z){
    console.log("you are right");
}
}
game()