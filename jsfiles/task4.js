// 1.    What will the following print in JavaScript?
//        console.log(“har\””.length)
// 2.    Explore the includes, startsWith and endsWith functions of a string.
// 3.    Write a program to convert a given string to lowercase.
// 4.    Extract the amount out of this string
//        “Please give Rs 1000”
// 5.    Try to change the 4th character of a given string. Were you able to do it?


//      Q1

let per = "har\""
console.log(per.length);

//      Q2

console.log(per.startsWith("h"));
console.log(per.endsWith("\""));

//      Q3

let low = "HARSH"
console.log(low.toLowerCase());

//      Q4

let str = "Please give Rs 1000"
console.log(str.slice(15));


//      Q5

const change = "Bhuro";
change[3] = "B"
console.log(change); // Friend is not changed ,because  string are immutable.
