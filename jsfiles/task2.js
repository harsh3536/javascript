// 1.Use logical operators to find whether the age of a person lies between 10 and 20?
// 2.Demonstrate the use of switch case statements in JavaScript.
// 3.Write a JavaScript program to find whether a number is divisible by 2 and 3.
// 4.Write a JavaScript program to find whether a number is divisible by either 2 or 3.
// 5.Print “you can drive” or “you cannot drive” based on age being greater than 18 using ternary operator.

//      Q1

let a = 10;

if (a >= 10 && a <= 20) {
    console.log("Yes, you are right");
}
else {
    console.log("are you wrong");
}


//      Q2

const age = 23;

switch (true) {
    case (age >= 18 && age <= 35):
        console.log("You Are Young");
        break;
    case (age >= 36 && age <= 50):
        console.log("You Are Old");
        break;
    default:
        console.log("Enter Valid Age");
        break;
}


//      Q3

const num = 12;

if(num % 2 == 0 && num % 3 == 0){
    console.log("True");
}
else{
    console.log("False");
}

//      Q4

const sum = 45;

if(sum % 2 == 0 || sum % 3 == 0){
    console.log("True");
}
else{
    console.log("False");
}

//      Q5

let value = 15;

value = value >= 18 ? "You can Drive" : "You can not Drive";

console.log(value);