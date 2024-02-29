let num = [21, 3, 1, 55, 59];

// for (i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// ForEach Loop

/* num.forEach((Element)=>{
    console.log(Element*Element);
}) */


// Array From    new create array in string

/* let name = "Harsh";
let arr = Array.from(name);
console.log(arr); */

// for...of

/* for (let i of num){
    console.log(i);
} */

// for...in

for (let i in num){
    console.log(num[i]);  // only i means key 
}