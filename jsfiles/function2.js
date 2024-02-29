// function harsh(num1 , num2){
//     console.log(num1 + num2);
// }
function harsh(num1, num2) {
    return num1 + num2
}

const a = harsh(2, 3)
console.log("result :", a);


function loginUSerMessage(username) {
    return `${username} just logged in. `
}

console.log(loginUSerMessage("Harsh"))


function calculteCartPrice(...num) {
    return num
}

console.log(calculteCartPrice(23, 23, 5623, 56, 2395623, 95623));

function calculteCartPrice2(val1, val2, ...num) {
    return num
}

console.log(calculteCartPrice2(23, 23, 5623, 56, 2395623, 95623));

const user = {
    username : "Harsh",
    price : 200
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and Price is ${anyobj.price}`);
}

handleObject(user)

const myNewArray = [65,32,56,6,95]

function myFun(anyarray){
    console.log(`My Array Value is ${anyarray[2]}`)
}

myFun(myNewArray)


const myNewArray2 = [65,32,56,6,95]

function myFun(anyarray){
    return anyarray[3]
}

// console.log(myFun(myNewArray2));
console.log(myFun([32,513,563,5312,5632]));  // Second Type of Create A array and object



