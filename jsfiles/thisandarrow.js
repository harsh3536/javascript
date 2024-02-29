// const one = function val(){
//     const username = "Harsh"
//     console.log(this);

// }

// one()


const one = function val() {
    const username = "Harsh"
    console.log(username);

}

one()

const two = () => {
    let username = "Harsh"
    console.log(username);
}
two()


// Arrow Function

// normal Arrow Function Declare

const a = (num1, num2) => {
    return num1 + num2;
}
console.log(a(15, 15))

// second type Arroe Function Declration

const b = (num1 , num2) => num1 + num2

console.log(b(2, 3));

// Third type Arroe Function Declration

const c = (num1 , num2) => (num1 + num2)

console.log(c(3,3))

// Forth type Arroe Function Declration

const d = (num1 , num2) => ({username : "Harsh"})

console.log(d(3,4));