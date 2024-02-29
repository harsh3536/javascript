const value = [1,2,3,4];

const str = value.toString();
console.log(str,typeof str);  // chnage to String

const join = value.join(" OR ")
console.log(join , typeof join);  // Join Method

value.pop()
// const pop = value.pop()
console.log(value,4);  // last index are remove in array

let p = value.push(35)
console.log(value,p); // Last add index num in array

let s = value.shift();
console.log(s , value); // first element remove in array

let u = value.unshift(21);
console.log(u , value); // add first element in array