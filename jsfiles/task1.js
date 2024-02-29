// Q1

let a = "Harsh"
let b = 23;

console.log(a + b);


//Q2 check typeof

console.log(typeof a);
console.log(typeof b);

// Q3

const c = {
    fname : "Harsh",
    lname : "Khokhar",
    no : 131121
}
//  c = "djnj"; // no declare to second time
// console.log(c);

// Q4  add a new key in Q3

c['friend'] = "Bhuro";
c['fname'] = "Amit";
console.log(c);


//Q5 

const dict = {
    quotidian : "kwoh-tid-ee-uhn",
    amalgamate : "uh-mal-guh-meyt",
    orotund : " ohr-uh-tuhnd",
    stipulate : "stip-yuh-leyt",
    jalopy : " juh-lop-ee"
}

console.log(dict);
console.log(dict.jalopy); // meaning same
console.log(dict['jalopy']);  // meaning same