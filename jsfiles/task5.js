var prompt = require('prompt-sync')();


// 1. Create an array of numbers and take input from the user to add numbers to this array.
// 2. Keep adding numbers to the array in question-1 until 0 is added the array.
// 3. filter for numbers divisible by 10 from a given array.
// 4. Create an array of square of given numbers.
// 5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated).

//      Q1

/* let num = [10, 20, 30, 40, 50];

let a = prompt("Enter a Number :- ")
a = Number.parseInt(a);
num.push(a)

console.log(num); */

//      Q2

/* 
let num = [10, 20, 30, 40, 50];
let a;
do {
    a = prompt("Enter a Number :- ")
    a = Number.parseInt(a);
    num.push(a)

} while (a != 0);

console.log(num); */


//      Q3
/* 
let arr = [12, 2, 50, 54, 20];

let n = arr.filter((a) => {
    return a % 10 == 0;
})

console.log(n); */

//      Q4

/* let arr = [1, 2, 3, 4, 5]

arr.forEach((b) => {
    console.log(b * b);
}) */

//      Q5

let arr = [1, 2, 3, 4, 5]

let h = arr.reduce((h1,h2)=>{
    return h1 * h2;
})

console.log(h);
