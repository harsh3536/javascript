var prompt = require('prompt-sync')();

// 1.    Write a program to print the marks of a student in an object using for loop 
//        obj = {harry: 98, rohan: 70, aakash: 7}
// 2.    Write a program in Q-1 using for in loop.
// 3.    Write a program to print “try again” until the user enters the correct number.
// 4.    Write a function to find mean of 5 numbers.

//      Q1

// blank


//      Q2

let marks = {
    harsh : 88,
    shubham : 82,
    bhuro : 80
}
for (let key in marks){
    console.log("The Marks of " + key + " are " + marks[key]);
}

//      Q3

let correct = 45;
let i;
while (i != correct){
    console.log("Try Again!");
    i = prompt("Enter a Correct Number : ");
}
console.log("You have entered a correct number");

//      Q4

const mean = (a, b, c, d) =>{
    return(a + b + c + d)/4;
}
console.log(mean(4,5,6,7));