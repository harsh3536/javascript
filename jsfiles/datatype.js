// 7 type of datatypes
// nn bb ss u
// null number
// bigint boolean
// symbol string
// undefined

let a ,b,c,e,f,g;
a = "Harsh";
b = 25;
c = true;
 const d = ["Hey", "bro" , "jnmx"];
e = {fname:"Harsh" ,lname:"Khokhar"};
f = null;
g;

console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);

console.log(c);
console.log(typeof c);

console.log(d);
console.log(typeof d);

console.log(e);
console.log(typeof e);

console.log(f);
console.log(typeof f);

console.log(g);
console.log(typeof g);

let h = BigInt("35")
console.log(h);
console.log(typeof h);

let i = Symbol("sn")
console.log(i);
console.log(typeof i);


// Object in Javascript

const item = {
    "Harsh" : true,
    "Shubham" : false,
    "Bhuro" : 45
}

item['nisrag'] = "out"  // add 
console.log(item);
